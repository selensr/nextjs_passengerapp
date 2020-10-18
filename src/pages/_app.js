import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../assets/styles.scss";

const GlobalStyle = createGlobalStyle`
  html,
  * {
	box-sizing: border-box;
	margin: 0;
  padding: 0;

  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	  font-family: -apple-system, Roboto, sans-serif;
  	font-size: 1em;
    width: 100%;
  }
`;

const theme = {
  colors: {
    primary: "#8fcfd1",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
