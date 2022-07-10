import * as React from "react";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");
  const [color, setColor] = React.useState<string>("Red");

  const takeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const takeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const takeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, age, color);
  };

  return (
    <div className="form-col">
      <h1>FORM SIGN UP</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Input name="Name" value={name} onChange={takeName} />
        <Input name="Age" value={age} onChange={takeAge} />
        <Select
          name="Choose favorite color"
          value={color}
          onChange={takeColor}
        />
        <button className="submit-btn" type="submit">
          Submit
        </button>
        <br></br>
        <button className="clear-btn">Clear</button>
      </form>
    </div>
  );
}

// setting data type for input
type InputType = {
  name: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ name, value, onChange }: InputType) => {
  return (
    <div>
      <label>{name} :</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

// setting data type for select
type SelectType = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ name, value, onChange }: SelectType) => {
  return (
    <div>
      <label>{name} :</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};
