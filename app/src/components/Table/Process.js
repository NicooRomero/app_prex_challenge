import React from 'react'

export default function Process(props) {

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

    const processList = serverInfo.ProccessList;

    function formatProcessList(processList) {
        
        const lines = processList.split('\n').filter(line => line.trim());
        
        const filteredLines = lines.filter(line => !line.startsWith('=') && !line.includes('Image Name'));
        
        const processes = filteredLines.map(line => {
            const parts = line.trim().split(/\s{2,}/);
            return {
                imageName: parts[0],
                pid: parts[1],
                sessionName: parts[2],
                sessionNum: parts[3],
                memUsage: parts[4],
            };
        });

        return processes;
    }

    const formattedProcesses = formatProcessList(processList);

    return (

        <div className="container px-4 mt-6 mx-auto">
        <h2 className="text-lg font-medium text-gray-800">System Processes</h2>
        <div className="flex flex-row justify-center mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Image Name</th>
                                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">PID</th>
                                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Session Name</th>
                                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Session#</th>
                                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Mem Usage</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {formattedProcesses.map((process, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{process.imageName}</td>
                                        <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{process.pid}</td>
                                        <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{process.sessionName}</td>
                                        <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{process.sessionNum}</td>
                                        <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{process.memUsage}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
