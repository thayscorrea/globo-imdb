import { useState } from "react";

import Layout from "../../components/LayoutAdmin/Layout";
import ButtonOutline from "../../components/misc/ButtonOutline.";
import SeoHead from "../../components/SeoHead";
import TableMovies from "../../components/Tables/Movies";
import ModalMovie from "../../components/Modals/ModalMovie";

const Movies = ({ items }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SeoHead title='Users' />
      <Layout>
        <div className="bg-black w-full pt-16" id="pricing">
          <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-left justify-center">
            <div className="flex flex-col w-full my-16">
              <div className="relative overflow-x-auto">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
                  <div className="flex ">
                    <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Pesquisar filmes" />
                  </div>
                  <ButtonOutline action={() => setShowModal(true)} children='Cadastrar' />
                </div>
                <TableMovies items={items} />
              </div>

              { showModal && <ModalMovie setShowModal={setShowModal} />}

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
      items: items,
    },
  }
}

export default Movies