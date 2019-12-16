import React, { useState } from 'react';
import Answer from './Answer';
import { Container, Info, Table } from './styles';

export default function Dashboard() {
  const [answer, setAnswer] = useState(false);

  function handleAnswer() {
    setAnswer(true);
  }

  return (
    <Container>
      <Info>
        <h1>Pedidos de auxílio</h1>
      </Info>
      <Table>
        <table>
          <thead>
            <tr>
              <th>ALUNOS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bruno Figueiredo</td>
              <td>
                <button type="button" onClick={() => handleAnswer()}>
                  responder
                </button>
              </td>
            </tr>
            <tr>
              <td>Claudio Soares</td>
              <td>
                <button type="button">responder</button>
              </td>
            </tr>
            <tr>
              <td>Roberta Figueiredo</td>
              <td>
                <button type="button">responder</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Table>
      <Answer answer={answer} closeAnswer={setAnswer} />
    </Container>
  );
}
