import "./styles.css";
import { InputGroup, Form } from "bootstrap-4-react";
import Table from "react-bootstrap/Table";
import { useState } from "react";

import { data } from "./data";

export default function App() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <InputGroup mb="3">
        <InputGroup.PrependText>Nom / Prénom</InputGroup.PrependText>
        <Form.Input type="text" onChange={handleChange} />
      </InputGroup>
      <Table striped bordered hover variant="white">
        <thead>
          <tr>
            <th>#</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Genre</th>
          </tr>
        </thead>

        <tbody>
          {data
            .filter((user) => {
              return search.toLowerCase() === ""
                ? user
                : user.first_name.toLowerCase().includes(search);
            })
            .map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
