import { useEffect, useState } from "react";

import Layout from "../../components/LayoutAdmin/Layout";
import ButtonOutline from "../../components/misc/ButtonOutline.";
import ModalUser from "../../components/Modals/ModalUser";
import SeoHead from "../../components/SeoHead";
import TableUsers from "../../components/Tables/Users";
import { routePrivate } from "../../services/routePrivate";

const Users = ({ items }) => {

  routePrivate()

  const [originalData, setOriginalData] = useState(items);
  const [data, setData] = useState(items);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null)

  const onClickRegister = () => {
    setShowModal(true)
    setUser(null)
  }

  const handleInput = (e) => {
    const inputValue = e.target.value;
    setData(searchTable(inputValue));
  }

  const handleFilter = (e) => {
    const inputValue = e.target.value;
    setData(filterStatus(inputValue));
  }

  function searchTable(value) {
    const filteredData = [];

    if (value.length === 0) {
      return originalData;
    }

    for (let i = 0; i < originalData.length; ++i) {
      const newValue = value.toLowerCase();
      const nameUser = originalData[i].name.toLowerCase();
      const emailUser = originalData[i].email.toLowerCase();

      if (nameUser.includes(newValue) || emailUser.includes(newValue)) {
        filteredData.push(originalData[i]);
      }
    }
    return filteredData;
  }

  function filterStatus(value) {
    const inputValue = parseInt(value);
    const filteredData = [];

    if (inputValue.length === 0 || inputValue == -1) {
      return originalData;
    }

    for (let i = 0; i < originalData.length; ++i) {
      const status = originalData[i].delete_at == null ? 1 : 0;

      if (status == inputValue) {
        filteredData.push(originalData[i]);
      }
    }

    return filteredData;
  }

  return (
    <>
      <SeoHead title='Users' />
      <Layout>
        <div className="bg-black w-full pt-16" id="pricing">
          <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-left justify-center">
            <div className="flex flex-col w-full my-16">
              <div className="relative overflow-x-auto">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
                  <div>
                    <select defaultValue="-1" onChange={(e) => handleFilter(e)} className="inline-flex items-center text-black-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5">
                      <option value="-1">Todos</option>
                      <option value="1">Ativo</option>
                      <option value="0">Inativo</option>
                    </select>
                  </div>
                  <div className="flex">
                    <input type="text" onChange={(e) => handleInput(e)} className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Pesquisar usuários" />
                  </div>
                  <ButtonOutline action={() => onClickRegister()}>Cadastrar</ButtonOutline>
                </div>
                <TableUsers setShowModal={setShowModal} items={data} setUser={setUser} />
              </div>

              {showModal && <ModalUser setShowModal={setShowModal} user={user} />}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const items = await fetch(`http://localhost:8000/users`).then(res => res.json());

  return {
    props: {
      items: items,
    },
  }
}

export default Users