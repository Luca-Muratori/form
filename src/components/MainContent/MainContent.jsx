import { useState } from "react";
import Form from "../Form/Form";
import Tab from "../Tab/Tab";


//try pass the active value to sibling
export default function MainContent() {
  const [active, setActive]=useState(true);

  return (
    <div className="mainContent">
      <Tab onClick={setActive} />
      <Form active={active}/>
    </div>
  );
}
