import FormMovie from '../Forms/FormMovie';

const ModalMovie = ({ setShowModal }) => {

    return (
        <>
            <div
                className="justify-center bg-black-700 pt-16 bg-opacity-75 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-1000 outline-none focus:outline-none"
            >
                <div className="relative w-full my-6 mx-auto max-w-4xl bg-white-500">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Cadastrar filme
                            </h3>
                            <button
                                onClick={() => setShowModal(false)}
                            >
                                <span className="text-black-700 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>

                        <div className="relative p-6 flex-auto">
                            <FormMovie />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalMovie