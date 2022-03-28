import { useAuthenticator } from "@aws-amplify/ui-react";

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem",
  background: "#ccc",
};

const Header: React.FC = () => {
  const { user, signOut } = useAuthenticator();

  return (
    <div style={header}>
      <h3>Hey {user?.username}</h3>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Header;
