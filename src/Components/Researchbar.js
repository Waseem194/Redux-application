import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Researchbar = () => {
  const [research, setResearch] = useState("");
  const [validate, setValidate] = useState(false);
  const researchSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    form.checkValidity();
    resetForm('');
    console.log(researchSubmit)
  };

  const resetForm = () => {
    setResearch("");
    
  };
  
  return (
    <div>
      <Form
        className="d-flex"
        noValidate
        validated={validate}
        onSubmit={researchSubmit}
      >
        <Form.Control
          value={research}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(event) => setResearch(event.target.value)}
        />
        <Button variant="outline-success d-flex">Search</Button>
      </Form>
    </div>
  );
};
export default Researchbar;
