import Layout from "../../components/LayoutAdmin/Layout";
import SeoHead from "../../components/SeoHead";
import TableUsers from "../../components/Tables/Users";

const Users = ({ items }) => {
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
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-black-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                      Filtrar por
                      <svg className="w-2.5 h-2.5 ms-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>

                    <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                      <ul className="py-1 text-sm text-gray-700" aria-labelledby="dropdownActionButton">
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Ativo</a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Inativo</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex">
                    <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Pesquisar usuários" />
                  </div>
                </div>
                <TableUsers items={items} />
              </div>
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