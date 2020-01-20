import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.styles";

// HOC to render either a spinner or the Wrapped Comp based of a condition

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );

export default WithSpinner;
