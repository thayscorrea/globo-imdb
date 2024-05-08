const TableMovies = ({ items }) => {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-black-700 shadow-md sm:rounded-lg">
            <thead className="text-xs text-black-700 uppercase bg-gray-500">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Nome
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Ano de Lançamento
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Duração
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Sinopse
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Avaliação
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ name, year, time, sinopse }, index) => (
                    <tr className="bg-white border-b" key={index}>
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                            <div className="ps-3">
                                <div className="text-base font-semibold">{name}</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            {year}
                        </td>
                        <td className="px-6 py-4">
                            {time}
                        </td>
                        <td className="px-6 py-4">
                            {sinopse}
                        </td>
                        <td className="px-6 py-4">
                            
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 hover:underline">Editar</a>
                            <a href="#" className="font-medium text-blue-600 hover:underline ml-6">Desativar</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableMovies