import React, { useState } from "react";
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker,
  TimePicker,
  DateTimePicker,
} from "@material-ui/pickers";
// layout for page

import Auth from "layouts/Auth.js";

const NOVO_USUARIO_ACESSO = gql`
     mutation novoUsuarioAcesso($input: UsuarioInput) {
            novoUsuarioAcesso(input: $input) {
                cpf
                nome
                email
            }
        }
`;

export default function Cadastro() {

  // State for message
  const [message, saveMessage] = useState(null);

  // Apollo handles state by itself, not necessary to handle ourselves
  const [ novoUsuarioAcesso ] = useMutation(NOVO_USUARIO_ACESSO);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      cpf: '',
      senha: '',
      dt_nascimento: ''
    },
    validationSchema: Yup.object({
      nome: Yup.string()
          .required('O nome é obrigatório'),
      email: Yup.string()
          .email('Email não é válido')
          .required('O email é obrigatório'),
      cpf: Yup.string()
          .required('O cpf é obrigatório')
          .min(14, 'O cpf tem que respeitar o seguinte formato: 333.333.333-33')
          .max(14, 'O cpf tem que respeitar o seguinte formato: 333.333.333-33'),
      senha: Yup.string()
          .required('A senha não pode estar em branco')
          .min(6, 'A senha precisa ter miníno 6 caracteres'),
      dt_nascimento: Yup.date().nullable()
    }),
    onSubmit: async inputData => {

      console.log(inputData);
      const { nome, email, cpf, senha, dt_nascimento } = inputData

      try {
        const { data } = await novoUsuarioAcesso({
          variables: {
            "input":{
              nome,
              email,
              cpf,
              senha,
              dt_nascimento
            }
          }
        });
        saveMessage(`Usuário cadastrado com sucesso`);

        setTimeout(() => {
          saveMessage(null);
          router.push('/auth/login');
        }, 2000);
      } catch (error) {
        saveMessage(error.message.replace('GraphQL error: ', ''));

        setTimeout(() => {
          saveMessage(null);
        }, 3000);
      }
    }
  });

  const showMessage = () => {
    return(
        <div className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
          <p>{message}</p>
        </div>
    )
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
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
                      htmlFor="nome"
                    >
                      Nome
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="nome"
                           type="text"
                           placeholder="Nome"
                           value={formik.values.nome}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                    />
                  </div>

                  { formik.touched.nome && formik.errors.nome ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{formik.errors.nome}</p>
                      </div>
                  ) : null }

                  <div className="relative w-full mb-3">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                          id="date-picker-dialog"
                          label="Data Nascimento"
                          inputVariant="outlined"
                          format="MM/dd/yyyy"
                          value={formik.values.dt_nascimento}
                          onChange={value => props.setFieldValue("dt_nascimento", value)}
                          KeyboardButtonProps={{
                            "aria-label": "Mudar data"
                          }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                    >
                     Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="email"
                           type="text"
                           placeholder="Email"
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                    />
                  </div>

                  { formik.touched.email && formik.errors.email ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{formik.errors.email}</p>
                      </div>
                  ) : null }

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="cpf"
                    >
                      CPF
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="cpf"
                           type="text"
                           placeholder="CPF"
                           value={formik.values.cpf}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
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
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           id="senha"
                           type="password"
                           placeholder="Senha"
                           value={formik.values.senha}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
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
                        Estou de acordo com o{" "}
                        <a
                          href="#cndv"
                          className="text-blue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Termo de Uso e Privacidade
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <input
                        type="submit"
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        value="Cadastrar-se"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Cadastro.layout = Auth;
