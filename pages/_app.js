import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Roboto&display=swap');  body{
    padding:0;
    margin:0;
    font-family: 'Cormorant Garamond', serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
