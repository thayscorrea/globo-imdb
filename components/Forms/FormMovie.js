import React, { useState } from "react";
import Swal from 'sweetalert2'

import api from "../../utils/axios";
import ButtonOutline from "../misc/ButtonOutline.";

const FormMovie = ({ movie }) => {
    const isEdit = movie ? true : false

    const [name, setName] = movie?.name ? useState(movie?.name) : useState(null)
    const [year, setYear] = movie?.year ? useState(movie?.year) : useState(null)
    const [sinopse, setSinopse] = movie?.sinopse ? useState(movie?.sinopse) : useState(null)
    const [time, setTime] = movie?.time ? useState(movie?.time) : useState(null)
    const [file, setFile] = movie?.image ? useState(movie?.image) : useState(null)

    const registerMovie = () => {
        api.post('movie', {
            name, year, time, sinopse, image: file
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

    const editMovie = () => {
        api.put('movie/' + movie.movieID, {
            name, year, time, sinopse, image, genres
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

    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ano de Lançamento</label>
                    <input type="number" name="year" id="year" value={year} onChange={(e) => setYear(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="2024" required="" />
                </div>
                <div>
                    <label for="sinopse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sinopse</label>
                    <input type="text" name="sinopse" id="sinopse" value={sinopse} onChange={(e) => setSinopse(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>

                <div>
                    <label for="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempo</label>
                    <input type="number" name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label for="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Capa do filme</label>
                    <input type="file" name="image" id="image" placeholder="Anexe a capa do filme" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div className="flex items-center justify-center">
                    <ButtonOutline action={() => isEdit ? editMovie() : registerMovie()}>Salvar</ButtonOutline>
                </div>
            </form>
        </div>
    )
};

export default FormMovie;