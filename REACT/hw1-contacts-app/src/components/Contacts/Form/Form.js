import { React, useState } from "react";

function Form(props) {
  const [form, setForm] = useState({ fullName: "", phoneNumber: "" });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    props.addContact([...props.contacts, form]);

    console.log(form);

    setForm({ fullName: "", phoneNumber: "" });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullName"
          value={form.fullName}
          placeholder="Full Name"
          onChange={handleInputChange}
        />
      </div>

      <div>
        <input
          name="phoneNumber"
          value={form.phoneNumber}
          placeholder="Phone Number"
          onChange={handleInputChange}
        />
      </div>

      <div className="add-btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
