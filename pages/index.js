import React from "react";
import Link from "next/link";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-blue-600"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Carteira Nacional Digital de Vacinação
                  </h1>
                  <p className="mt-4 text-lg text-gray-200">
                    Saiba onde, quando e como vacinar de maneira prática e fácil!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blue-400 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-clock"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Economize tempo</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Saiba o dia e a hora que vai ser vacinado em um posto de atendimento onde você já tem uma reserva, evitando aglomeração.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-mail-bulk"></i>
                    </div>
                    <h6 className="text-xl font-semibold"> Receba notificações</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Sempre que novas campanhas forem realizadas, você e sua família serão notificados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Uma carteira única</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Sua carteira de vacinação é privada e somente você tem acesso a ela. As instituições públicas o privadas podem realizar alterações no seu histórico de vacinas somente se você permitir.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Acesse de qualquer parte
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  É possivel buscar campanhas públicas de vacinação e filtar por idade, lugar e muito mais.
                </p>
                <Link href="/auth/register">
                  <a
                      href="#"
                      className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                      target="_blank"
                  >
                    Baixar App (Em progresso)
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                  <img
                      src={require("assets/img/cndv_app_login.jpg")}
                      className="w-full align-middle rounded-t-lg"
                      alt="..."
                  ></img>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Faça seu cadastro
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                 Saber onde vacinar, quando e onde fica bem mais fácil com sua CNDV.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">

              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Te avisamos quando e onde
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Economize tempo ao saber o dia e hora que vai ser vacinado em um posto de atendimento onde você já tem uma reserva, evitando aglomeração.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-mail-bulk text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Receba notificações
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Sempre que novas campanhas forem realizadas, você e sua família serão notificados.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Todos os dados são mantidos em total sigilo e segurança.
                    </p>

                    <div className="relative w-full mb-3">
                      <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="nome"
                      >
                        Nome
                      </label>
                      <input
                          type="email"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Nome"
                      />
                    </div>

                    <div className="relative w-full mb-3 mt-8">
                      <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="cpf"
                      >
                        CPF
                      </label>
                      <input
                          type="text"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="CPF"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                          type="email"
                          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                      />
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Cadastrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
