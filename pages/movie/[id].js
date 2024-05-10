import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

import Layout from "../../components/Layout/Layout";
import SeoHead from "../../components/SeoHead";
import ButtonOutline from "../../components/misc/ButtonOutline.";
import ModalEvaluation from "../../components/Modals/ModalEvaluation";

const Movie = ({ movie, genres }) => {

    if (!movie || !genres) return

    const [evaluation, setEvaluation] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(0)

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (sessionStorage.getItem('isAdmin') == 1) {
                setIsAdmin(1)
            }

            if (sessionStorage.getItem('isAdmin') == 1) {
                setIsLogged(true)
            }
        }
    }, []);

    let genresString = ''
    genres.map(({ name }, index) => {
        genresString += name + ", "
    })

    genresString = genresString.slice(0, -2)

    const openModal = () => {
        setShowModal(true)
        setEvaluation(0)
    }

    const star = {
        size: 30,
        value: movie.evaluation,
        edit: false,
        count: 4
    };

    return (
        <>
            <SeoHead title='Home' />
            <Layout>
                <div className="bg-black w-full pt-16" id="pricing">
                    <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-left justify-center">
                        <div className="flex flex-col w-full my-16" id="testimoni">
                            <div className="px-3 flex items-stretch cursor-pointer" id={`movie-` + movie.movieID}>
                                <div className="transition-all rounded-lg p-8 flex flex-col">
                                    <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                                        <div className="flex order-2 xl:order-1">
                                            <img
                                                src={'http://localhost:8000/public/uploads/' + movie.image}
                                                height={500}
                                                width={500}
                                                alt={movie.name}
                                            />
                                            <div className="flex flex-col ml-12 text-left">
                                                <div className="grid justify-between">
                                                    <p className="text-5xl text-white-500 capitaliz pb-6">
                                                        {movie.name}
                                                    </p>
                                                    <div>
                                                        <div className="flex items-center mb-6 font-bold text-blue-gray-500">
                                                            <span className="text-2xl">{movie.evaluation}</span>
                                                            <ReactStars {...star} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-lg text-white-300 capitalize">
                                                    {genresString}
                                                </p>
                                                <p className="text-base text-white-300 capitalize">
                                                    {movie.year} - {movie.time}
                                                </p>
                                                <p className="text-xl mt-5 text-left text-white-500 pt-4">{movie.sinopse}</p>

                                                <p className="text-base pt-8 text-white-300 capitalize">
                                                    Diretores: {movie.directors}
                                                </p>
                                                <p className="text-base mt-2 text-white-300 capitalize">
                                                    Atores: {movie.actors}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                {isLogged && !isAdmin &&
                                    <ButtonOutline action={() => openModal()}>Avaliar</ButtonOutline>
                                }
                            </div>
                        </div>
                        {showModal && <ModalEvaluation evaluation={evaluation} setEvaluation={setEvaluation} setShowModal={setShowModal} movieID={movie.movieID} />}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export async function getServerSideProps(context) {
    const id = context.params.id

    const movie = await fetch(`http://localhost:8000/movie/` + id).then(res => res.json());
    const genres = await fetch(`http://localhost:8000/movie/genres/` + id).then(res => res.json());

    return {
        props: {
            movie: movie[0],
            genres: genres
        },
    }
}

export default Movie