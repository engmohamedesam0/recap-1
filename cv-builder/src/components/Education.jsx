import { useState } from "react";

export default function Education() {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({ school: "", study: "", date: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Education</h2>

      {edit ? (
        <>
          <input name="school" placeholder="School" onChange={handleChange} />
          <input name="study" placeholder="Study" onChange={handleChange} />
          <input name="date" placeholder="Date" onChange={handleChange} />

          <button onClick={() => setEdit(false)}>Submit</button>
        </>
      ) : (
        <>
          <p>{data.school}</p>
          <p>{data.study}</p>
          <p>{data.date}</p>

          <button onClick={() => setEdit(true)}>Edit</button>
        </>
      )}
    </div>
  );
}