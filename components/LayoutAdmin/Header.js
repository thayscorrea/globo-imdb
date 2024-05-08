import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";

import Logo from "../../public/favicon/icon.svg"

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Logo className="h-8 w-auto" />
          </div>
          <ul className="hidden lg:flex col-start-2 col-end-8 text-black-500  items-right">
            <LinkScroll
              activeClass="active"
              to="users"
              spy={true}
              smooth={true}
              time={1000}
              onSetActive={() => {
                setActiveLink("users");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "users"
                  ? " text-yellow-500 animation-active "
                  : " text-black-500 hover:text-yellow-500 a")
              }
            >
              Usuários
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="movies"
              spy={true}
              smooth={true}
              time={1000}
              onSetActive={() => {
                setActiveLink("movies");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "movies"
                  ? " text-yellow-500 animation-active "
                  : " text-black-500 hover:text-yellow-500 ")
              }
            >
              Filmes
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="votes"
              spy={true}
              smooth={true}
              time={1000}
              onSetActive={() => {
                setActiveLink("votes");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "votes"
                  ? " text-yellow-500 animation-active "
                  : " text-black-500 hover:text-yellow-500 ")
              }
            >
              Votos
            </LinkScroll>
          </ul>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="users"
              href="/users"
              spy={true}
              smooth={true}
              time={1000}
              onSetActive={() => {
                setActiveLink("users");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "users"
                  ? "  border-yellow-500 text-yellow-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Usuários
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="movies"
              spy={true}
              smooth={true}
              time={1000}
              onSetActive={() => {
                setActiveLink("movies");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "movies"
                  ? "  border-yellow-500 text-yellow-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Filmes
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="votes"
              spy={true}
              smooth={true}
              time={1000}
              onSetActive={() => {
                setActiveLink("votes");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "votes"
                  ? "  border-yellow-500 text-yellow-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Votos
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
