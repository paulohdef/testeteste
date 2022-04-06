// import Cliente from "../core/Cliente";

import moment from 'moment'
import Requisicao from '../../core/Requisicao'
import { IconeEdit, IconeExcluir, IconeView } from '../icons'

// import { IconeEdit, IconeExcluir } from "./icons";

interface TableBasicProps {
  requisicao: Requisicao[]
  // clienteSelecionado?: (cliente: Cliente) => void
  // clienteExcluido?: (cliente: Cliente) => void
}

const formatDate = (value: string) => {
  return moment().format('DD/MM/YYYY') //moment(value).format(moment.HTML5_FMT.DATE)

  //moment(value).format('DD/MM/YYYY')
}

export default function TableBasic(props: TableBasicProps) {
  // const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  function rendereizarCabecalho() {
    return (
      <tr>
        {/* <th className={` text-left text-xs p-2`}>Requisição</th> */}
        <th className={` text-left text-xs p-2`}>Data</th>
        <th className={` text-left text-xs p-2`}>Despacho</th>
        <th className={` text-left text-xs p-2`}>Descrição</th>
        <th className={` text-left text-xs p-2`}>Situação</th>
        <th className={` text-left text-xs p-2`}>Departamento</th>
        <th className={` text-left text-xs p-2`}>Status</th>
        <th className={` text-left text-xs p-2`}>Tipo</th>
        <th className={` text-left text-xs p-2`}>Ações</th>

        {/* {exibirAcoes ?  <th className={` text-center p-2`}>Ações</th> : false} */}
      </tr>
    )
  }

  function renderizarDados() {
    return props.requisicao?.map((req, i) => {
      return (
        <tr
          key={req._id}
          className={`${i % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50'}`}
        >
          {/* <td className={` text-left text-xs p-2`}> {req._id} </td> */}
          <td className={` text-left text-xs  p-2`}>
            {formatDate(req.datarequisicao)}
          </td>
          <td className={` text-left text-xs  p-2`}>
            {' '}
            {formatDate(req.datadespacho)}{' '}
          </td>
          <td className={` text-left text-xs  p-2`}> {req.descricao} </td>
          <td className={` text-left text-xs  p-2`}> {req.situacao} </td>
          <td className={` text-left text-xs  p-2`}> {req.departamento} </td>
          <td className={` text-left text-xs  p-2`}> {req.status} </td>
          <td className={` text-left text-xs  p-2`}> {req.tipo} </td>
          {renderizarAcoes()}
        </tr>
      )
    })
  }

  function renderizarAcoes() {
    return (
      <td className="flex justify-center md:justify-start">
        <div className="flex item-center justify-center">
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 mouseup">
            {IconeView}
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            {IconeEdit}
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            {IconeExcluir}
          </div>
        </div>

        {/* <button
          onClick={() => {}}
          className={`
                    flex justify-center items-center
                     text-gray-300-600 rounded-full p-2 m-1
                     hover:bg-purple-50
                `}
        >
          {IconeEdit}
        </button>

        <button
          onClick={() => {}}
          className={`
                    flex justify-center items-center
                     text-red-600 rounded-full p-2 m-1
                     hover:bg-purple-50
                `}
        >
          {IconeExcluir}
        </button> */}
      </td>
    )
  }

  // function renderizarAcoes(financeiro: Financeiro) {

  //     return (
  //         <td className="flex justify-center md:justify-start">
  //             {props.clienteSelecionado ? (
  //                 <button onClick={ () => props.clienteSelecionado?.(financeiro) }
  //                 className={`
  //                     flex justify-center items-center
  //                      text-gray-300-600 rounded-full p-2 m-1
  //                      hover:bg-purple-50
  //                 `}>  { IconeEdit } </button>
  //             ) : false}

  //             {props.clienteExcluido ? (
  //                 <button onClick={ () => props.clienteExcluido?.(financeiro) }
  //                 className={`
  //                     flex justify-center items-center
  //                      text-red-600 rounded-full p-2 m-1
  //                      hover:bg-purple-50
  //                 `}>  { IconeExcluir } </button>
  //             ) : false}

  //         </td>
  //     )
  // }

  return (
    <table
      className={`
              w-full    overflow-hidden
        `}
    >
      <thead
        className={`
                 border-t-2 border-b-2 border-gray-300
            `}
      >
        {rendereizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  )
}
