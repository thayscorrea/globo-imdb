const TableEvaluations = ({ items }) => {
    return (
        <div className="bg-black w-full pt-16" id="pricing">
            <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-left justify-center">
                <div className="flex flex-col w-full my-16">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-black-700 shadow-md sm:rounded-lg">
                            <thead className="text-xs text-black-700 uppercase bg-gray-500">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Usuário
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Filme
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Avaliação
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(({ nameUser, nameMovie, evaluation }, index) => (
                                    <tr className="bg-white border-b" key={index}>
                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">{nameUser}</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            {nameMovie}
                                        </td>
                                        <td className="px-6 py-4">
                                            {evaluation}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableEvaluations