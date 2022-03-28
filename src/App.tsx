import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { Home } from "./pages";

function App() {
  return (
    <Authenticator.Provider>
      <Home />
    </Authenticator.Provider>
  );
}

export default withAuthenticator(App);
