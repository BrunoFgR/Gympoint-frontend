import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdCheckCircle } from 'react-icons/md';
import history from '~/services/history';

import { Container, Info, Table } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Info>
        <h1>Gerenciando matrículas</h1>

        <button
          type="button"
          onClick={() => history.push('/registrations/new')}
        >
          <MdAdd color="#fff" size={20} />
          CADASTRAR
        </button>
      </Info>
      <Table>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>PLANO</th>
              <th>INICIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bruno Figueiredo</td>
              <td>Start</td>
              <td>05 de Dezembro de 2019</td>
              <td>05 de Janeiro de 2020</td>
              <td>
                <MdCheckCircle size={20} color="#42CB59" />
              </td>
              <td>
                <Link to="/registrations/edit/1">editar</Link>
                <button type="button">remover</button>
              </td>
            </tr>
            <tr>
              <td>Bruno Figueiredo</td>
              <td>Start</td>
              <td>05 de Dezembro de 2019</td>
              <td>05 de Janeiro de 2020</td>
              <td>
                <MdCheckCircle size={20} color="#42CB59" />
              </td>
              <td>
                <Link to="/registrations/edit/1">editar</Link>
                <button type="button">remover</button>
              </td>
            </tr>
            <tr>
              <td>Bruno Figueiredo</td>
              <td>Start</td>
              <td>05 de Dezembro de 2019</td>
              <td>05 de Janeiro de 2020</td>
              <td>
                <MdCheckCircle size={20} color="#42CB59" />
              </td>
              <td>
                <Link to="/registrations/edit/1">editar</Link>
                <button type="button">remover</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Table>
    </Container>
  );
}
