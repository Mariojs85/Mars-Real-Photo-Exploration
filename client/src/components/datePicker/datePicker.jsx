import Form from "react-bootstrap/Form";

const DatePicker = ({ onSelect, value, minDate, maxDate }) => {
  const handleOnSelect = (e) => {
    onSelect(e.target.value);
  };

  return (
    <Form.Group controlId="duedate">
      <Form.Control
        type="date"
        name="duedate"
        placeholder="Due date"
        value={value || ""}
        min={minDate}
        max={maxDate}
        onChange={handleOnSelect}
      />
    </Form.Group>
  );
};
export default DatePicker;
