import styled from 'styled-components';

import signInBackgroundImg from '../../assets/sign-in-background.jpg';

// #EDEBD7 text
// #2D242B input
// #FF9000 button
// #4B3B47 background
// #FF595E fail
// #11A777 success

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat left;
  background-size: cover;
  mix-blend-mode: hard-light;
  opacity: 0.8;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }
`;
