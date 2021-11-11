import { Provider } from "next-auth/client";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Navbar.css";
import Navbar from "../components/Navbar";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#355C7D",
  },
};

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <Provider session={pageProps.session}>
      {/* <Header /> */}
      <Navbar />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </Provider>
  );
}

export default MyApp;
