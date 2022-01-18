import "./App.css";
import AppBar from "@mui/material/AppBar";
import Header from "./components/Header";
import RandomTopping from "./components/ListTopping";
import Footer from "./components/Footer";
import ButtonLogic from "./components/ButtonLogic";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return (
    <div className="App">
      <>
        <ThemeProvider theme={darkTheme}>
          <Header />
        </ThemeProvider>
          <ButtonLogic />
          <Footer />
      </>
    </div>
  );
}

export default App;
