import React, { useState } from "react";
import "./AddForm.css"
export default function AddForm({ onAdd }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("ชาย");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({ name, gender });
    setName("");
    setGender("ชาย");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label>ชื่อ:</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>เพศ:</label>
        <select
          className="form-select"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="ชาย">ชาย</option>
          <option value="หญิง">หญิง</option>
          <option value="อื่นๆ">อื่นๆ</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success">
        save
      </button>
    </form>
  );
}
