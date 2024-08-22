import React from 'react'

export default function Sessions(props) {

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

    const sessionList = serverInfo.UsersLogged;

    function formatSessionList(sessionList) {

        const lines = sessionList.split('\n').filter(line => line.trim());

        const filteredLines = lines.filter(line => !line.startsWith('SESSIONNAME'));

        const sessions = filteredLines.map(line => {
            const parts = line.trim().split(/\s{2,}/);
            return {
                sessionName: parts[0] || '',
                userName: parts[1] || '',
                id: parts[2] || '',
                state: parts[3] || '',
                type: parts[4] || '',
                device: parts[5] || '',
            };
        });

        return sessions;
    }

    const formattedSessions = formatSessionList(sessionList);

    return (
        <div className="container px-4 mt-6 mx-auto">
            <h2 className="text-lg font-medium text-gray-800">Sessions</h2>
            <div className="flex flex-row justify-center mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Session Name</th>
                                        <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Username</th>
                                        <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">ID</th>
                                        <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">State</th>
                                        <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Type</th>
                                        <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Device</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {formattedSessions.map((session, index) => (
                                        <tr key={index}>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{session.sessionName}</td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{session.userName}</td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{session.id}</td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{session.state}</td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{session.type}</td>
                                            <td className="px-4 py-4 text-sm text-gray-800 whitespace-nowrap">{session.device}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
