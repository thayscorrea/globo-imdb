import Swal from 'sweetalert2'

import api from "../../utils/axios";

const TableMovies = ({ items, setShowModal, setMovie }) => {

    const editMovie = (movie) => {
        setShowModal(true)
        setMovie(movie)
    }

    const deleteMovie = (movie) => {
        api.post('movie/delete/' + movie.movieID)
            .then(function (response) {
                Swal.fire({
                    title: response.data.message,
                    icon: 'success',
                    showConfirmButton: false
                })

                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            })
            .catch(function (error) {
                Swal.fire({
                    title: "Ocorreu um erro, por favor tente novamente!",
                    icon: 'error',
                    showConfirmButton: false
                })
                console.log(error)
            });
    }

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
                {items.map((movie, index) => (
                    <tr className="bg-white border-b" key={index}>
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                            <div className="ps-3">
                                <div className="text-base font-semibold">{movie.name}</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            {movie.year}
                        </td>
                        <td className="px-6 py-4">
                            {movie.time}
                        </td>
                        <td className="px-6 py-4">
                            {movie.sinopse}
                        </td>
                        <td className="px-6 py-4">
                            {movie.evaluation}
                        </td>
                        <td className="px-6 py-4">
                            <a onClick={() => editMovie(user)} className="font-medium text-blue-600 hover:underline">Editar</a>
                            <a onClick={() => deleteMovie(user)} className="font-medium text-blue-600 hover:underline ml-6">Excluir</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TableMovies