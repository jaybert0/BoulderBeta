import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import Paper from '@mui/material/Paper';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./Store/store"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import background from '../src/components/background.png'

const theme = createTheme({
  palette: {
    type: 'light',
    secondary: {
      main: '#1b5fa8',
      light: '#5b8cda',
      dark: '#fffff',
    },
    primary: {
      main: '#a9651c',
      light: '#df934a',
      dark: '#753a00',
    },
    background: {
      default: '#A9651C',
    },
    // text: {
    //   secondary: '#ffffff',
    // },
  },
});
const styles = {
  paperContainer: {
      backgroundImage: `url(${background})`
  }
};


ReactDOM.render(
<ThemeProvider theme={theme}>
<Paper style={styles.paperContainer}>

  <Router>
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </Provider>
  </Router>
  </Paper>
</ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
