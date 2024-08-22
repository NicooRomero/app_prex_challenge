import React from 'react'

export default function InfoSystem(props) {

    const { serverInfo } = props;


    if (!serverInfo) {
        return (
            <div className='min-h-screen mt-4'>
                <div className="flex flex-col w-full max-w-md mx-auto animate-pulse p-9 items-center">
                    <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-8 border-t-blue-600" />
                    <h1 className="h-2 text-gray-300">Loading data...</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="container px-4 mt-6 mx-auto">
            <h2 className="text-lg font-medium text-gray-800">System Info </h2>

            <div className="flex flex-row justify-center mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">

                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">CPU</th>
                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">OS</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Spedd</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Idle</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Irq</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Nice</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Sys</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">User</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <h2 className="font-medium text-gray-800 ">{serverInfo?.InfoSystem.model}</h2>
                                        </td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60">
                                                {serverInfo?.InfoSystem.os}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <p className="text-gray-500">{serverInfo?.InfoSystem.speed}</p>
                                        </td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <p className="text-gray-500">{serverInfo?.InfoSystem.times.idle}</p>
                                        </td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <p className="text-gray-500">{serverInfo?.InfoSystem.times.irq}</p>
                                        </td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <p className="text-gray-500">{serverInfo?.InfoSystem.times.nice}</p>
                                        </td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <p className="text-gray-500">{serverInfo?.InfoSystem.times.sys}</p>
                                        </td>
                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <p className="text-gray-500">{serverInfo?.InfoSystem.times.user}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
