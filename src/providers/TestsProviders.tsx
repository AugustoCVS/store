import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQuery } from "./ReactQuery";
import StyledComponentsRegistry from "../styles/registry";
import { ThemeApplication } from "./ThemeApplication";
import { MockProducts } from "../mocks/products";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  products: MockProducts,
};

const store = configureStore({
  reducer: (state = initialState) => state,
});

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <ThemeApplication>
        <ReactQuery>
          <StyledComponentsRegistry>
            {children}
            <ToastContainer />
          </StyledComponentsRegistry>
        </ReactQuery>
      </ThemeApplication>
    </Provider>
  );
};

export { AllTheProviders };
