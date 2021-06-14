import { render } from "@testing-library/react";
import { LaunchPage } from "./LaunchPage";
import { BrowserRouter as Router } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
});

const Wrapper = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <LaunchPage />
      </Router>
    </ApolloProvider>
  );
};
test("LaunchPage", async () => {
  render(<Wrapper />);
});
