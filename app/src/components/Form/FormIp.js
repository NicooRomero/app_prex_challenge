import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import InfoSystem from '../Table/InfoSystem';
import Process from '../Table/Process';
import Sessions from '../Table/Sessions';
import { CSVLink } from "react-csv";

export default function FormIp() {

    const [serverIp, setServerIp] = useState();
    const [serverInfo, setServerInfo] = useState([]);

    const date = new Date();
    const dateFormatter = Intl.DateTimeFormat('sv-SE');

    const formik = useFormik({
        initialValues: { ipAddress: '' },
        onSubmit: async (ip) => {

            if (ip.ipAddress !== '18.224.94.148' && ip.ipAddress !== '18.224.72.202') {
                toast.error('Invalid ip Address.')
                setServerIp();
                formik.resetForm();
                return;
            } else {
                setServerIp(ip.ipAddress)
            }

            const response = await axios.get(`http://3.22.172.29:5002/getServerInfoByIp?ip=${ip.ipAddress}`)
            if (response.status === 200) {
                toast.success('Successful server data.');
                setServerInfo(response.data);
            } else {
                console.log(response);
                toast.error('Invalid server ip address');
            }
        }
    })

    const model = serverInfo?.InfoSystem?.model
    const os = serverInfo?.InfoSystem?.os
    const version = serverInfo?.InfoSystem?.version
    const process = serverInfo?.ProccessList
    const sessions = serverInfo?.UsersLogged

    const csvData = [{ model }, { os }, { version }, { process }, { sessions }]

    const plainTextDownload = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(serverInfo)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `${serverIp}_${dateFormatter.format(date)}.txt`;

        link.click();
    };

    const ResetForm = () => {
        setServerIp('')
        setServerInfo([])
        formik.resetForm();
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen' >
            <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
                <h2 className="text-lg font-semibold text-gray-700 capitalize">Technical Challenge - Relevamiento de Servidores </h2>
                <p className="mt-6 text-sm text-gray-500">Nicolás Romero</p>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <div className='mt-6'>
                            <label className="text-gray-700">Dirección IP</label>
                            <input
                                type="text"
                                name="ipAddress"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                onChange={formik.handleChange}
                                value={formik.values.ipAddress}
                            />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between gap-4'>
                        <div className="flex items-center mt-6">
                            <button type='submit' className="flex items-center px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                Send
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                </svg>
                            </button>
                        </div>
                        {serverIp ?
                            <div className='flex flex-row gap-4 justify-between'>
                                <CSVLink
                                    data={csvData}
                                    filename={`${serverIp}_${dateFormatter.format(date)}.csv`}
                                >
                                    <div className="flex items-center mt-6">
                                        <button type='button' className="flex items-center px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-700 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                                            </svg>

                                            .csv
                                        </button>
                                    </div>
                                </CSVLink>
                                <div className="flex items-center mt-6">
                                    <button type='button' onClick={() => plainTextDownload()} className="flex items-center px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-700 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                                        </svg>

                                        .txt
                                    </button>
                                </div>
                                <div className="flex items-center mt-6">
                                    <button onClick={() => ResetForm('')} className="flex items-center px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                        Reset
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            : null
                        }
                    </div>
                </form>
            </div>
            <p className="mt-6 text-sm text-gray-500">Consultar las siguientes direcciones IP:</p>
            <p className="mt-1 text-sm text-gray-500">Windows: 18.224.94.148</p>
            <p className="mt-1 text-sm text-gray-500">Linux: 18.224.72.202</p>
            {serverInfo.length === 0 ?
                null
                :
                <div>
                    <InfoSystem serverInfo={serverInfo} />
                    <Sessions serverInfo={serverInfo} />
                    <Process serverInfo={serverInfo} />
                </div>
            }
        </div >
    )
}
