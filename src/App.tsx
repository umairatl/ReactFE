import * as React from "react";
import "./style.css";

export default function App() {
  const [name, setName] = React.useState<string>("San");
  const [age, setAge] = React.useState<string | undefined>();

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  type InputType = {
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };

  return (
    <div>
      <input name="Name" value={name} onChange={changeName} />
      <br />
      <input name="Age" value={age} onChange={changeAge} />
      <br />
    </div>
  );
}
