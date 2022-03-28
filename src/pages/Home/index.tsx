import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { Header, Form, Chats } from "../../components";
import { DataStore, Predicates } from "@aws-amplify/datastore";
import { Chatty } from "../../models";

const home = {
  padding: "2rem",
};

const Home: React.FC = () => {
  const { user } = useAuthenticator();

  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [messages, setMessages] = useState<Chatty[]>([]);

  const fetchMessages = async (): Promise<void> => {
    try {
      setLoading(true);
      DataStore.query(Chatty, Predicates.ALL).then((messages) => {
        const sortedMessages = messages.sort((a, b) => {
          return -a.createdAt?.localeCompare(b.createdAt!)!;
        });

        setLoading(false);
        setMessages(sortedMessages);
      });
    } catch (error) {
      console.log("error messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const subscribe = () => {
    DataStore.observe(Chatty).subscribe((msg) => {
      console.log("msg:", msg);
      fetchMessages();
    });
  };

  useEffect(() => {
    fetchMessages();
    subscribe();

    if (user?.username) {
      setUsername(user.username);
    }
  }, []);

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    if (!value || !username) return;

    DataStore.save(
      new Chatty({
        user: username,
        message: value,
        createdAt: new Date().toISOString(),
      })
    )
      .then(() => {
        console.log("message created");
        setValue("");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  return (
    <>
      <Header />
      <div style={home}>
        {user && (
          <>
            <Form value={value} setValue={setValue} submit={handleSubmit} />
            <Chats data={messages} loading={loading} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
