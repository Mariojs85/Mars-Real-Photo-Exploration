import { DropdownButton, Dropdown } from "react-bootstrap";

const QueryForm = () => {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Rover Camera">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default QueryForm;
