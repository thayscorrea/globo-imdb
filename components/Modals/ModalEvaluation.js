import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import ReactStars from "react-rating-stars-component";

import api from "../../utils/axios";
import ButtonOutline from '../misc/ButtonOutline.';

const ModalEvaluation = ({ evaluation, setEvaluation, setShowModal, movieID }) => {

    const [userID, setUserID] = useState(0)

    if (typeof window !== "undefined") {
        if (sessionStorage.getItem('userID')) {
            setUserID(sessionStorage.getItem('userID'))
        }
    }

    const star = {
        size: 30,
        value: 0,
        edit: true,
        count: 4,
        onChange: newValue => {
            setEvaluation(newValue);
        }
    };
    
    const handleClick = () => {
        if (userID == 0) {
            Swal.fire({
                title: "É necessário realizar o login antes de avaliar um filme!",
                icon: 'error',
                showConfirmButton: false
            })
        }

        api.post('evaluation/', {
            userID, movieID, evaluation
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
        <>
            <div
                className="justify-center bg-black-700 pt6 bg-opacity-75 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-1000 outline-none focus:outline-none"
            >
                <div className="relative w-2/5 my-6 mx-auto max-w-4xl bg-white-500">
                    <div className="p-8 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold text-black-700">
                                Sua avaliação
                            </h3>
                            <button
                                onClick={() => setShowModal(false)}
                            >
                                <span className="text-black-700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>

                        <div className="pb-6 flex justify-center">
                            <ReactStars {...star} />
                        </div>

                        <ButtonOutline action={() => handleClick()}>Avaliar</ButtonOutline>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalEvaluation