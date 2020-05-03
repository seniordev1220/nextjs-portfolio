import styled from 'styled-components';

export const Nav = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.primaryLight};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  z-index: 999;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 90%;
  margin: auto;
  padding: 1rem 0;

  .logo {
    font-family: 'Indie Flower', cursive;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
  }

  .links {
    a {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.primaryDark};
      text-decoration: none;
      transition: all 0.3s ease-in;
      cursor: pointer;

      :not(:last-child) {
        margin-right: 15px;
      }

      &:hover {
        color: #999;
      }
    }
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 25vh;
  background: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};

  .icons {
    ${({ theme }) => theme.flex};

    a {
      color: ${({ theme }) => theme.primaryLight};
      font-size: 1.6rem;
      text-decoration: none;
      margin: 0 1.5rem;
      transition: all 0.3s ease-in;

      &:hover {
        color: #999;
      }
    }
  }

  span {
    font-size: 1.4rem;
  }
`;
