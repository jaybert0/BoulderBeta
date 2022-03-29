import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
// import rootReducer from "./Features/Reducer/reducer";
import store from "./Store/store"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    secondary: {
      main: '#1b5fa8',
      light: '#5b8cda',
      dark: '#003678',
    },
    primary: {
      main: '#a9651c',
      light: '#df934a',
      dark: '#753a00',
    },
    background: {
      default: '#A9651C',
    },
  },
});


ReactDOM.render(
<ThemeProvider theme={theme}>
  <Router>
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </Provider>
  </Router>
</ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
