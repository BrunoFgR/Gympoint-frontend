import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container, Info, Controller, Input, Table } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Info>
        <h1>Gerenciando alunos</h1>
        <Controller>
          <button type="button">
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </button>
          <Input>
            <MdSearch size={20} color="#999" />
            <input type="text" placeholder="Buscar aluno" />
          </Input>
        </Controller>
      </Info>
      <Table>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th className="center">IDADE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bruno Figueiredo</td>
              <td>brunofds281@gmail.com</td>
              <td className="center">20</td>
              <td>
                <Link to="/students/edit/1">editar</Link>
                <button type="button">remover</button>
              </td>
            </tr>
            <tr>
              <td>Bruno Figueiredo</td>
              <td>brunofds281@gmail.com</td>
              <td className="center">20</td>
              <td>
                <Link to="/students/edit/1">editar</Link>
                <button type="button">remover</button>
              </td>
            </tr>
            <tr>
              <td>Bruno Figueiredo</td>
              <td>brunofds281@gmail.com</td>
              <td className="center">20</td>
              <td>
                <Link to="/students/edit/1">editar</Link>
                <button type="button">remover</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Table>
    </Container>
  );
}
