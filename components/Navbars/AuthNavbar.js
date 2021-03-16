import React from "react";
import { useQuery, gql} from '@apollo/client';
import { useRouter } from 'next/router';
import Link from "next/link";
// components
import PagesDropdown from "components/Dropdowns/PagesDropdown.js";

// GraphQL Query
const OBTENER_USUARIO = gql`
        query obtenerUsuario{
            obtenerUsuario{
                cpf
                nome
                email
            }
        }
    `;

export default function Navbar(props) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();

  const { data, loading, error } = useQuery(OBTENER_USUARIO);
  if (loading) return 'Carregando...';

  if(!data) {
    return router.push('/auth/login');
  }

  if(data.obtenerUsuario){
    const { cpf, nome, email } = data.obtenerUsuario;
  }

  const closeSession = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
  }
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-3xl text-white text-lg font-bold leading-relaxed inline-block mr-4 py-3 whitespace-no-wrap uppercase"
                href="#jvo"
              >
                CNDV
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <PagesDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                  target="_blank"
                >
                  <i className="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                  target="_blank"
                >
                  <i className="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">


                    { (data.obtenerUsuario) ?
                        <>
                        <Link href="/profile">
                          <a
                              href="#cndv"
                              className={
                                "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                              }
                          >
                            <button
                                className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                type="button"
                            >
                              Carteira
                            </button>
                          </a>
                        </Link>
                        <button
                            onClick={() => closeSession()}
                            className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                            type="button"
                        >
                          Sair
                        </button>
                        </>
                    :
                        <Link href="/auth/login">
                          <a
                              href="#cndv"
                              className={
                                "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                              }
                          >
                              <button
                                className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                                type="button"
                            >
                              Entrar
                          </button>
                          </a>
                        </Link>
                    }

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
