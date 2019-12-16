import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import history from '~/services/history';

import { Container, Info, Controller, Table } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Info>
        <h1>Gerenciando alunos</h1>
        <Controller>
          <button type="button" onClick={() => history.push('/students/new')}>
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </button>
        </Controller>
      </Info>
      <Table>
        <table>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th className="center">DURAÇÃO</th>
              <th className="center">VALOR p/ MÊS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Start</td>
              <td className="center">1 mês</td>
              <td className="center">R$ 129,00</td>
              <td>
                <Link to="/plans/edit/1">editar</Link>
                <button type="button">remover</button>
              </td>
            </tr>
            <tr>
              <td>Gold</td>
              <td className="center">3 meses</td>
              <td className="center">R$ 109,00</td>
              <td>
                <Link to="/plans/edit/1">editar</Link>
                <button type="button">remover</button>
              </td>
            </tr>
            <tr>
              <td>Diamont</td>
              <td className="center">6 meses</td>
              <td className="center">R$ 89,00</td>
              <td>
                <Link to="/plans/edit/1">editar</Link>
                <button type="button">remover</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Table>
    </Container>
  );
}
