import styled from 'styled-components';

export const Logo = styled.div`
  background: #407BFF;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  color: #FFF;
  padding: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 960px) {
    width: 70%;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: -2px;
    line-height: 30px;
  }
`;

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 70px;

  section {
    img { max-width: 500px; width: 100%; border-radius: 20px;
      border-bottom-left-radius: 7px solid #407BFF;
    }

    h2 { font-size: 1em; display: flex; justify-content: center;
      align-items: center; text-align: center; width: 70%; margin: 0 auto;
      svg { width: 35px; color: #407BFF; }
    }

    span { width: 75%; line-height: 20px; margin: 0 auto; margin-bottom: 7px; }
    p { font-size: .8em; text-align: center; margin-bottom: 20px;

      a:visited { color: #407BFF; }
    }

    span { text-align: center; display: block; }

    article {
      margin-bottom: 10px;
      border-radius: 7px;
      color: #fff;

      ul {
        width: 30%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;

        li {
          list-style: none;
          margin: 0px 7px;


          a { text-decoration: none; text-indent: -99999px; display: block; }

          .icons { width: 30px; height: 30px; background: green; }
          .icons-facebook { background: url('./icon-facebook-h.svg') no-repeat center center; background-size: cover; transition: all .3s ease-in-out; }
          .icons-instagram { background: url('./icon-instagram-h.svg') no-repeat center center; background-size: cover; transition: all .3s ease-in-out; }
          .icons-telegram { background: url('./icon-telegram-h.svg') no-repeat center center; background-size: cover; transition: all .3s ease-in-out; }
          .icons-twitter { background: url('./icon-twitter-h.svg') no-repeat center center; background-size: cover; transition: all .3s ease-in-out; }

        }

        /* li:hover {
          .icons-facebook { background: url('./icon-facebook-h.svg') no-repeat center center; background-size: cover; }
          .icons-instagram { background: url('./icon-instagram-h.svg') no-repeat center center; background-size: cover; }
          .icons-telegram { background: url('./icon-telegram-h.svg') no-repeat center center; background-size: cover; }
          .icons-twitter { background: url('./icon-twitter-h.svg') no-repeat center center; background-size: cover; }
        } */

      }

    }
  }

  .container-shared-socials {
    background: #F0F0F5;
    border-radius: 10px;
    padding: 20px;
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template-columns: 1fr;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;

    .btns-shared-socials {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      grid-template-columns: 1fr 1fr;

      a { width: 50%; height: 40px; color: #fff; font-weight: bold; border-radius: 50px; margin-top: 3px;
        display: flex; justify-content: center; align-items: center; background: #34af23;
        text-align: center; text-decoration: none; transition: all .5s ease-in-out; }

      a:first-child { background: #3b5998; transition: all .5s ease-in-out; }
      a:hover:first-child { background: #2f4678; box-shadow: 0 0 10px #3b5998; transform: scale(1.05); transition: all .5s ease-in-out;  }
      a:hover { background: #2b911d; box-shadow: 0 0 10px #34af23; transform: scale(1.05); transition: all .5s ease-in-out;  }
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 0 30px;}
  }

  form {
    padding: 0px 0px;

    p { margin-bottom: 10px; font-size: .80em; text-align: justify;
      a:visited { color: #407BFF; }
    }

    input[type="radio"] {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 4px;
    }

    input[type="radio"]:last-child { margin-left: 20px; }

    button {
      width: 100%;
      padding: 10px 20px;
      font-weight: bold;
      margin-bottom: 10px;
      font-size: 1em;
      border: 0;
      background: #407BFF;
      color: #fff;
      border-radius: 50px;
      cursor: pointer;
      transition: all .5s ease-in-out;
    }

    button:hover { background: #3b6fe3; }

    span { font-size: .7em; margin-bottom: 30px; display: block;
      color: #c95151; font-weight: bold; text-align: center; }
  }
`;
