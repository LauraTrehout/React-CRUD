import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Button, Checkbox, Form } from "semantic-ui-react";

const Create = () => {
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios.post("https://614f1d16b4f6d30017b48486.mockapi.io/users", {
      firstName,
      lastName,
      checkbox,
    }).then(() => history.push('/read'));
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button type="submit" onClick={postData} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Create;
