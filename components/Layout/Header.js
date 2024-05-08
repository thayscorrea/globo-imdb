import React, { useState, useEffect } from "react";

import ButtonOutline from "../misc/ButtonOutline.";
import Logo from "../../public/favicon/icon.svg"

const Header = () => {
  
  return (
    <>
      <header className="fixed top-0 w-full  z-30 bg-white-500 transition-all shadow-md pt-0">
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Logo className="h-8 w-auto" />
          </div>
          <ul className="hidden lg:flex col-start-2 col-end-8 text-black-500 gap-x-6 items-center">

            <div className="w-1/3">
              <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Filtrar por</option>
                <option value="Diretor">Diretor</option>
                <option value="Filme">Filme</option>
                <option value="Gênero">Gênero</option>
                <option value="Autores">Autores</option>
              </select>
            </div>

            <div className="flex items-center  w-full gap-2">
              <div className="relative w-full">
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full ps-10 p-2.5" placeholder="Pesquisar" required />
              </div>
              <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-yellow-500 rounded-lg border border-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-500">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Pesquisar</span>
              </button>
            </div>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <ButtonOutline>Login</ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">

          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
