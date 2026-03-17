import { useState } from "react";

export default function Experience() {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Experience</h2>

      {edit ? (
        <>
          <input name="company" placeholder="Company" onChange={handleChange} />
          <input name="position" placeholder="Position" onChange={handleChange} />
          <input name="responsibilities" placeholder="Responsibilities" onChange={handleChange} />
          <input name="from" placeholder="From" onChange={handleChange} />
          <input name="to" placeholder="To" onChange={handleChange} />

          <button onClick={() => setEdit(false)}>Submit</button>
        </>
      ) : (
        <>
          <p>{data.company}</p>
          <p>{data.position}</p>
          <p>{data.responsibilities}</p>
          <p>{data.from} - {data.to}</p>

          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
}