import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store from "./redux/store";
import axios from "axios";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
axios.defaults.baseURL = "https://back-fenix.onrender.com/";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
      <PersistGate persistor={persistor}>
        <React.StrictMode>
        <QueryClientProvider client={queryClient}>
           <BrowserRouter>
             <App />
           </BrowserRouter>
          </QueryClientProvider>
        </React.StrictMode>
      </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
