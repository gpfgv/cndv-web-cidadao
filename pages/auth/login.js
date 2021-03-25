import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import Auth from "layouts/Auth.js";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getSession } from 'next-auth/client';
import { signIn } from 'next-auth/client';

export default function Login() {

  //State for message
  const [ message, saveMessage] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      cpf: '',
      senha: ''
    },
    validationSchema: Yup.object({
      cpf: Yup.string()
          .required('O cpf é obrigatório')
          .min(14, 'O cpf tem que respeitar o seguinte formato: 333.333.333-33')
          .max(14, 'O cpf tem que respeitar o seguinte formato: 333.333.333-33'),
      senha: Yup.string()
          .required('A senha não pode estar em branco')
    }),
    onSubmit: async inputData => {

      const { cpf, senha } = inputData;

      if(cpf && senha){
        saveMessage('Autenticando...');
        const result = await signIn('credentials',{
          redirect: false,
          cpf: cpf,
          password: senha
        });
        console.log(result);
        if (!result.error) {
          setTimeout(() => {
            saveMessage(null);
            router.replace('/profile');
          }, 2000);
        }
      }else{
        setTimeout(() => {
          saveMessage("Por favor verifique os dados de acesso!");
        }, 3000);
      }
    }
  });

  useEffect(() => {
    getSession().then(session => {
      if(session) {
        router.replace('/');
      } else {
        setIsLoading(false);
      };
    });
  }, [router]);

  if(isLoading) {
    return <p>Carregando...</p>;
  }

  const showMessage = () => {
    return(
        <div className="bg-red py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
          <p>{message}</p>
        </div>
    )
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    { message && showMessage() }
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={formik.handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="cpf"
                    >
                      CPF
                    </label>
                    <input className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                           id="cpf"
                           type="text"
                           placeholder="CPF"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.cpf}
                    />
                  </div>

                  { formik.touched.cpf && formik.errors.cpf ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{formik.errors.cpf}</p>
                      </div>
                  ) : null }

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="senha"
                    >
                      Senha
                    </label>
                    <input className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                           id="senha"
                           type="password"
                           placeholder="Senha"
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           value={formik.values.senha}
                    />
                  </div>

                  { formik.touched.senha && formik.errors.senha ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{formik.errors.senha}</p>
                      </div>
                  ) : null }

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-700">
                        Guardar sessão
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <input
                        type="submit"
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        value="Entrar"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#cndv"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-800"
                >
                  <small>Esquece sua senha</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link href="/auth/cadastro">
                  <a href="#" className="text-gray-800">
                    <small>Criar uma conta no CNDV</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
