import React from "react";

import ButtonOutline from "../misc/ButtonOutline.";

const FormMovie = () => {
    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sinopse</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ano de Lançamento</label>
                    <input type="number" name="year" id="year" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="2024" required="" />
                </div>
                <div>
                    <label for="sinopse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sinopse</label>
                    <input type="text" name="sinopse" id="sinopse" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label for="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Capa do filme</label>
                    <input type="file" name="image" id="image" placeholder="Anexe a capa do filme" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div className="flex items-center justify-center">
                    <ButtonOutline children='Cadastrar' />
                </div>
            </form>
        </div>
    )
};

export default FormMovie;