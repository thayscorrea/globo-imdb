import { useState } from "react";

import { routePrivate } from "../../services/routePrivate";
import Layout from "../../components/LayoutAdmin/Layout";
import ButtonOutline from "../../components/misc/ButtonOutline.";
import SeoHead from "../../components/SeoHead";
import TableMovies from "../../components/Tables/Movies";
import ModalMovie from "../../components/Modals/ModalMovie";

const Movies = ({ items }) => {

  routePrivate()

  const [originalData, setOriginalData] = useState(items);
  const [data, setData] = useState(items);
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState(null)

  const onClickRegister = () => {
    setShowModal(true)
    setMovie(null)
  }

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setData(searchTable(inputValue));
  }

  function searchTable(value) {
    const filteredData = [];

    if (value.length === 0) {
      return originalData;
    }

    for (let i = 0; i < originalData.length; ++i) {
      const newValue = value.toLowerCase();
      const nameMovie = originalData[i].name.toLowerCase();
      const sinopseMovie = originalData[i].sinopse.toLowerCase();
      const yearMovie = originalData[i].year;

      if (nameMovie.includes(newValue) || sinopseMovie.includes(newValue) || yearMovie == newValue) {
        filteredData.push(originalData[i]);
      }
    }
    return filteredData;
  }

  return (
    <>
      <SeoHead title='Movies' />
      <Layout>
        <div className="bg-black w-full pt-16" id="pricing">
          <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-left justify-center">
            <div className="flex flex-col w-full my-16">
              <div className="relative overflow-x-auto">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
                  <div className="flex ">
                    <input type="text" onChange={(e) => handleInput(e)} className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Pesquisar filmes" />
                  </div>
                  <ButtonOutline action={() => onClickRegister()}>Cadastrar</ButtonOutline>
                </div>
                <TableMovies setShowModal={setShowModal} items={data} setMovie={setMovie} />
              </div>

              {showModal && <ModalMovie setShowModal={setShowModal} movie={movie} />}

            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const items = await fetch(`http://localhost:8000/movies`).then(res => res.json());

  return {
    props: {
      items: items
    },
  }
}

export default Movies