import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableCell, Button } from "semantic-ui-react";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://614f1d16b4f6d30017b48486.mockapi.io/users")
        .then((response) => console.log(response) || setAPIData(response.data));
    };
    getData();
  }, []);
  const getUpdatedData = () => {
    axios
    .get("https://614f1d16b4f6d30017b48486.mockapi.io/users")
    .then((response) => console.log(response) || setAPIData(response.data));
};
  
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };
  const onDelete = (id) => {
    axios.delete(`https://614f1d16b4f6d30017b48486.mockapi.io/users/${id}`)
    .then(() => getUpdatedData());
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Firstname</Table.HeaderCell>
            <Table.HeaderCell>Lastname</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.Cell>Delete</Table.Cell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Link to="/update">
                  <TableCell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </TableCell>
                </Link>
                <TableCell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </TableCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
