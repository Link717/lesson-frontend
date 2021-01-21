import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { themes } from "./Styles/theme";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/modules";
import SignIn from "./Pages/SignIn/SignIn";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <ThemeProvider theme={{ ...themes }}>
    <Provider store={store}>
      <GlobalStyle />
      <SignIn />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
