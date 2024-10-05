import { useState } from "react";

import ListGroup from "./ListGroup";
import Alert from "./Alert";
import Button from "./Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

	const handleSelectItem = (item: string) => {
		console.log(item);
	}

  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
			{ alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert> }
      <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;