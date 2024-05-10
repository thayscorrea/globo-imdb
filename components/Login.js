import React, { useState } from "react";
import Swal from 'sweetalert2'

import api from "../utils/axios";
import ButtonOutline from "./misc/ButtonOutline.";
import Icon from "../public/favicon/icon.svg"

import { login } from "../services/auth";

const Login = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleClick = () => {
        if(!email || !password){
             Swal.fire({
                title: "Login e senha precisam ser preenchidos!",
                icon: 'error',
                showConfirmButton: false
            })
        }

        api.post('login', {
            email,
            password
        })
        .then(function (response) {
            const data = response.data
            login(data.token, data.userID, data.isAdmin)
        })
        .catch(function (error) {
            Swal.fire({
                title: error? error?.message : "Ocorreu um erro, por favor tente novamente!",
                icon: 'error',
                showConfirmButton: false
            })
            console.log(error)
        });
    }

    return (
        <div className="bg-black-700">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white-500 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="flex items-center justify-center">
                            <Icon/>
                        </div>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu email</label>
                                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div className="flex items-center justify-center">
                                <ButtonOutline action={() => handleClick()} children='Login' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;