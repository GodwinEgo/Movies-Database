import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.5) 41%,
      rgba(0,0,0,0.65) 100%, var(--darkGrey)
  ), url("https://www.themoviedb.org/t/p/w440_and_h660_face/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg");
  background-size: 100% cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animateHeroImage 1s;
  width: 100%;
  @keyframes animateHeroImage {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  padding: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  position: absolute;
  bottom: 40px;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  margin-right: 20px;
  min-height: 100px;
  color: var(--white);

  h1{
    font-size:(--fontSuperBig); 

    @media screen and (max-width: 720px){
      font-size: var(--fontBig)
    }
  }


  p{
    font-size: var(--fontMed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px){
    max-width: 100%;
  }
`;
