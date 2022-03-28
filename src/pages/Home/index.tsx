import { useAuthenticator } from "@aws-amplify/ui-react";
import { Header, Form } from "../../components";

const home = {
  padding: "2rem",
};

const Home: React.FC = () => {
  const { user } = useAuthenticator();

  return (
    <>
      <Header />
      <div style={home}>{user && <Form />}</div>
    </>
  );
};

export default Home;
