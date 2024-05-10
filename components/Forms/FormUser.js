import React, { useState } from "react";
import Swal from 'sweetalert2'

import api from "../../utils/axios";
import ButtonOutline from "../misc/ButtonOutline.";

const FormUser = ({ user }) => {
    const isEdit = user ? true : false

    const [name, setName] = user?.name ? useState(user?.name) : useState(null)
    const [email, setEmail] = user?.email ? useState(user?.email) : useState(null)
    const [type, setType] = user?.type ? useState(user?.type) : useState(0)
    const [password, setPassword] = useState(null)

    const setValidatePassword = (value) => {
        if (password != value) {
            Swal.fire({
                title: "Senhas não conferem!",
                icon: 'info',
                showConfirmButton: false
            })
        }
    }

    const registerUser = () => {
        api.post('user', {
            name,
            email,
            password,
            type
        })
            .then(function (response) {
                Swal.fire({
                    title: response.data.message,
                    icon: 'success',
                    showConfirmButton: false
                })
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

    const editUser = () => {
        api.put('user/' + user.userID, {
            name,
            email,
            type
        })
            .then(function (response) {
                Swal.fire({
                    title: response.data.message,
                    icon: 'success',
                    showConfirmButton: false
                })
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

    const resetPassword = () => {
        api.post('user/reset/' + user?.userID)
            .then(function (response) {
                Swal.fire({
                    title: response.data.message,
                    icon: 'success',
                    showConfirmButton: false
                })
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
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Name" required="" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nível</label>
                    <select onChange={(e) => setType(e.target.value)} defaultValue={type} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                        <option value="1">Admin</option>
                        <option value="0">Usuário</option>
                    </select>
                </div>
                {!isEdit &&
                    <>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirme a senha</label>
                            <input type="password" name="password" onMouseOut={(e) => setValidatePassword(e.target.value)} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                        </div>
                    </>
                }

                <div className="flex items-center justify-between">
                    <ButtonOutline action={() => isEdit ? editUser() : registerUser()}>Salvar</ButtonOutline>
                    {isEdit && <ButtonOutline action={() => resetPassword()} children='Resetar Senha' />}
                </div>
            </form>
        </div>
    )
};

export default FormUser;