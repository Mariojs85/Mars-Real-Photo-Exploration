import { useState } from "react";
import Form from "react-bootstrap/Form";

const DatePicker = ({ onSelect, value }) => {
  const handleOnSelect = (e) => {
    onSelect(e.target.value);
  };

  return (
    <Form.Group controlId="duedate">
      <Form.Control
        type="date"
        name="duedate"
        placeholder="Due date"
        value={value}
        onChange={handleOnSelect}
      />
    </Form.Group>
  );
};
export default DatePicker;
