import React from "react";

export default function Item({ id, name, gender, onDelete }) {
  return (
    <div className="d-flex justify-content-between align-items-center list-group-item fade-in-item">
      <span>
        {id}. {name} ({gender})
      </span>
      <button className="btn btn-danger btn-sm" onClick={() => onDelete(id)}>
        ลบ
      </button>
    </div>
  );
}
                               