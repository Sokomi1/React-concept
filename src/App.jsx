import React, { useState } from "react";
import "./App.css";

export default function App() {
  const data = [
    { id: 1, name: "I am the bon" },
    { id: 2, name: "of my sword" },
    { id: 3, name: "Student1" },
    { id: 4, name: "Student2" },
    { id: 5, name: "Student3" },
  ];

  const [student, setStudent] = useState(data);

  function deleteStudent(id) {
    setStudent(student.filter((item) => item.id !== id));
  }

  return (
    <div className="text-center mt-5">
      <h1>Total: {student.length}</h1>
      {student.map((item) => (
        <div key={item.id} className="mb-2">
          <span>
            {item.id}. {item.name}
          </span>
          <button
            className="btn btn-danger btn-sm ms-3"
            onClick={() => deleteStudent(item.id)}
          >
            ลบ
          </button>
        </div>
      ))}
    </div>
  );
}
