import React, { useRef, useState } from "react";
import Swal from 'sweetalert2'

import api from "../../utils/axios";
import ButtonOutline from "../misc/ButtonOutline.";

const FormMovie = ({ movie, genres }) => {
    const isEdit = movie ? true : false

    const [name, setName] = movie?.name ? useState(movie?.name) : useState(null)
    const [year, setYear] = movie?.year ? useState(movie?.year) : useState(null)
    const [sinopse, setSinopse] = movie?.sinopse ? useState(movie?.sinopse) : useState(null)
    const [time, setTime] = movie?.time ? useState(movie?.time) : useState(null)
    const [image, setImage] = movie?.image ? useState(movie?.image) : useState(null)
    const [directors, setDirectors]  = movie?.directors ? useState(movie?.directors) : useState(null)
    const [actors, setActors]  = movie?.actors ? useState(movie?.actors) : useState(null)
    const [genresMovie, setGenresMovie] = useState([])
    const filesElement = useRef(null);

    const handleInputGenres = (value) => {
        if(genresMovie.includes(value)){
            genresMovie.pop(value)
        }else{
            genresMovie.push(value)
        }        
    }

    const sendFile = async () => {
        const dataForm = new FormData();

        for (const file of filesElement.current.files) {
            dataForm.append('file', file);
        }

        const res = await fetch(`http://localhost:8000/upload`, {
            method: 'POST',
            body: dataForm
        });

        return res.json()
    };

    const validation = () => {
        if(!name || !year || !time || !sinopse || genresMovie.length == 0 || !directors || !actors){
            Swal.fire({
                title: "Preencha todos os campos!",
                icon: 'error',
                showConfirmButton: false
            })
            return
        }
    }

    const registerMovie = async () => {
        let image = await sendFile()
        image = image.file

        validation()

        api.post('movie', {
            name, year, time, sinopse, image, genres: genresMovie, directors, actors
        })
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

    const editMovie = async () => {
        let image = await sendFile()
        image = image.file

        validation()

        api.put('movie/' + movie.movieID, {
            name, year, time, sinopse, image, genres: genresMovie, directors, actors
        })
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
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                    <img id="file"></img>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ano de Lançamento</label>
                    <input type="number" name="year" id="year" value={year} onChange={(e) => setYear(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="2024" required="" />
                </div>
                <div>
                    <label htmlFor="sinopse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sinopse</label>
                    <input type="text" name="sinopse" id="sinopse" value={sinopse} onChange={(e) => setSinopse(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempo</label>
                    <input type="time" name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gêneros</label>
                    <ul className="items-center w-full grid grid-cols-4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                        {genres.map(({ generID, name }, index) => (
                            <li className="w-full" key={index}>
                                <div className="flex items-center ps-3 justify-between">
                                    <input id="vue-checkbox" type="checkbox" onChange={(e) => handleInputGenres(e.target.value)} value={generID} className="ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                    <label htmlFor="vue-checkbox" className="w-full py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{name}</label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <label htmlFor="directors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diretores</label>
                    <input type="text" name="directors" id="directors" value={directors} onChange={(e) => setDirectors(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label htmlFor="actors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Atores</label>
                    <input type="text" name="actors" id="actors" value={actors} onChange={(e) => setActors(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div>
                    <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Capa do filme</label>
                    <input type="file" name="file" accept="image/*" ref={filesElement} placeholder="Anexe a capa do filme" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                </div>
                <div className="flex items-center justify-center">
                    <ButtonOutline action={() => isEdit ? editMovie() : registerMovie()}>Salvar</ButtonOutline>
                </div>
            </form>
        </div>
    )
};

export default FormMovie;