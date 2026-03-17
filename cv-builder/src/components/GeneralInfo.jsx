import { useState } from "react";

export default function GeneralInfo() {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>General Info</h2>

      {edit ? (
        <>
          <input name="name" placeholder="Name" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />

          <button onClick={() => setEdit(false)}>Submit</button>
        </>
      ) : (
        <>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>

          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
}