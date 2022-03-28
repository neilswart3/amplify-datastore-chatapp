import { Button, TextField } from "@aws-amplify/ui-react";

interface Props {
  value: string;
  setValue: (value: string) => void;
  submit: (e: any) => void;
}

const Form: React.FC<Props> = ({ value, setValue, submit }) => {
  const handleChange = (e: any): void => {
    const { value } = e.target;

    setValue(value);
  };

  const handleSubmit = (e: any): void => {
    submit(e);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Message"
        name="message"
        id="message"
        value={value}
        onChange={handleChange}
      />
      <Button type="submit" variation="primary">
        Send
      </Button>
    </form>
  );
};

export default Form;
