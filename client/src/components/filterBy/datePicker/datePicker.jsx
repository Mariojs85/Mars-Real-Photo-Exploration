import { useState } from "react";
import Form from "react-bootstrap/Form";


const DatePicker = ()=> {
  const [date, setDate] = useState(new Date());

  console.log("DATE", date);

  return (
    <div className="App">
      <div>
        <div className="row">
          <div className="col-md-2">
            <Form.Group controlId="duedate">
              <Form.Control
                type="date"
                name="duedate"
                placeholder="Due date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DatePicker