import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo1.svg';
import { Container, Image, Nav, Profile } from './styles';

export default function Header() {
  const active = 'true';

  return (
    <Container>
      <Image>
        <img src={logo} alt="Gympoint" />
      </Image>
      <Nav>
        <ul>
          <li>
            <Link to="/students/dashboard" active={active}>
              ALUNOS
            </Link>
          </li>
          <li>
            <Link to="/plans/dashboard">PLANOS</Link>
          </li>
          <li>
            <Link to="/registrations/dashboard">MATRÍCULAS</Link>
          </li>
          <li>
            <Link to="/registrations/new">PEDIDOS DE AUXÍLIO</Link>
          </li>
        </ul>
      </Nav>
      <Profile>
        <strong>Bruno Figueiredo</strong>
        <span>sair do sistema</span>
      </Profile>
    </Container>
  );
}
