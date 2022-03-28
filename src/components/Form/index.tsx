import { Button, TextField } from "@aws-amplify/ui-react";
import { useState } from "react";

const Form: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: any): void => {
    const { value } = e.target;

    setMessage(value);
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Message"
        name="message"
        id="message"
        value={message}
        onChange={handleChange}
      />
      <Button type="submit" variation="primary">
        Send
      </Button>
    </form>
  );
};

export default Form;
