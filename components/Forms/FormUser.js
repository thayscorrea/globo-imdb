import React from "react";

import ButtonOutline from "../misc/ButtonOutline.";

const FormUser = () => {
    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Name" required="" />
                </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                </div>
                <div>
                    <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nível</label>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                        <option>Admin</option>
                        <option>Usuário</option>
                    </select>
                </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirme a senha</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div className="flex items-center justify-center">
                    <ButtonOutline children='Cadastrar' />
                </div>
            </form>
        </div>
    )
};

export default FormUser;