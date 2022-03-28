import { Loader } from "@aws-amplify/ui-react";
import { Chatty } from "../../models";

const messageItem = {
  backgroundColor: "#aaa",
  padding: "1rem",
};

interface Props {
  data: Chatty[];
  loading: boolean;
}

const Chats: React.FC<Props> = ({ data, loading }) => {
  if (loading) return <Loader />;

  return (
    <>
      <div>
        {data.length > 0 &&
          data.map(({ id, message, user, createdAt }) => (
            <div key={id} style={messageItem}>
              <h6>{user}: </h6>
              <p>{message}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Chats;
