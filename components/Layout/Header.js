import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'

import { logout } from "../../services/auth";
import ButtonOutline from "../misc/ButtonOutline.";
import Logo from "../../public/favicon/icon.svg"
import api from "../../utils/axios";

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(0)
  const [isLogged, setIsLogged] = useState(false)
  const [filter, setFilter] = useState(0)
  const [inputFilter, setInputFilter] = useState("")

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

  const handleClick = () => {
    api.post('search', {
      filter, input: inputFilter
    })
      .then(function (response) {
        const movieID =  response.data.movieID || response.data[0].movieID
        
        window.location.href = `/movie/${movieID}`
      })
      .catch(function (error) {
        Swal.fire({
          title: "Não foram encontrados resulados para sua pesquisa!",
          icon: 'info',
          showConfirmButton: false
        })
        console.log(error)
      });
  }

  return (
    <>
      <header className="fixed top-0 w-full  z-30 bg-white-500 transition-all shadow-md pt-0">
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <a href="/"><Logo className="h-8 w-auto" /></a>
          </div>
          <ul className="hidden lg:flex col-start-2 col-end-8 text-black-500 gap-x-6 items-center">

            <div className="w-1/3">
              <select defaultValue={0} onChange={(e) => setFilter(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option value="0">Filtrar por</option>
                <option value="directors">Diretor</option>
                <option value="movie">Filme</option>
                <option value="actors">Autores</option>
              </select>
            </div>

            <div className="flex items-center  w-full gap-2">
              <div className="relative w-full">
                <input type="text" onChange={(e) => setInputFilter(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full ps-10 p-2.5" placeholder="Pesquisar" required />
              </div>
              <button type="submit" onClick={() => handleClick()} className="p-2.5 ms-2 text-sm font-medium text-white bg-yellow-500 rounded-lg border border-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-500">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Pesquisar</span>
              </button>
            </div>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            {isLogged
              ?
              <div className="ml-6 font-medium flex justify-end items-center cursor-pointer text-black-500">
                {isAdmin && <a href="/admin">Portal Admin</a>}
                <span className="ml-4"><a onClick={() => logout()}>Sair</a></span>
              </div>
              :
              <ButtonOutline action={() => window.location.href = '/login'}>Login</ButtonOutline>
            }
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {isLogged
              ?
              <div className="ml-6 font-medium flex justify-between items-center cursor-pointer text-black-500">
                {isAdmin && <a href="/admin" >Portal Admin</a>}
                <span className="ml-4"><a onClick={() => logout()}>Sair</a></span>
              </div>
              :
              <ButtonOutline action={() => window.location.href = '/login'}>Login</ButtonOutline>
            }
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
