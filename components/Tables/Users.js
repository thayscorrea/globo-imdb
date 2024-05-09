import Swal from 'sweetalert2'

import api from "../../utils/axios";

const TableUsers = ({ items }) => {

    const disableUser = (id) => {
        api.post('user/disable/' + id)
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


    const enableUser = (id) => {
        api.post('user/enable/' + id)
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
                        E-mail
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Nível
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Ação
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map(({ userID, name, email, type, delete_at }, index) => (
                    <tr className="bg-white border-b" key={index} id={userID}>
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                            <div className="ps-3">
                                <div className="text-base font-semibold">{name}</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            {email}
                        </td>
                        <td className="px-6 py-4">
                            {type == 1 ? 'Admin' : 'Usuário'}
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                {delete_at !== null
                                    ? <><div className="h-2.5 w-2.5 rounded-full bg-gray-500 mr-2"></div> Inativo </>
                                    : <><div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Ativo </>
                                }
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a className="font-medium text-blue-600 hover:underline">Editar</a>
                            {
                                delete_at !== null
                                ?  <a onClick={() => enableUser(userID)} className="font-medium text-blue-600 hover:underline ml-6 cursor-pointer">Ativar</a>
                                : <a onClick={() => disableUser(userID)} className="font-medium text-blue-600 hover:underline ml-6 cursor-pointer">Desativar</a>
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    )
}

export default TableUsers