import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';
import './StudentList.css';
import Item from "./Item";
import AddForm from './AddForm';

export default function StudentList() {
  const fullData = [
    "I am the bone of my sword",
    "Steel is my body and fire is my blood",
    "I have created over a thousand blades",
    "Unknown to death",
    "Nor known to life",
    "Have withstood pain to create many weapons",
    "Yet, those hands will never hold anything",
    "So as I pray, Unlimited Blade Works",
  ];

  const [student, setStudent] = useState(
    fullData.map((name, index) => ({ id: index + 1, name, gender: "ไม่ระบุ" }))
  );
  const [lines, setLines] = useState([]);
  const [showList, setShowList] = useState(false);
  const [showTalk, setShowTalk] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [deletingIds, setDeletingIds] = useState([]);

  // ✅ เพิ่มฟังก์ชันนี้
  const handleAddStudent = ({ name, gender }) => {
    setStudent((prev) => [
      ...prev,
      { id: prev.length + 1, name, gender }
    ]);
  };

  function deleteStudent(id) {
    const name = student.find((s) => s.id === id)?.name;
    Swal.fire({
      title: 'แน่ใจนะ?',
      text: `คุณต้องการลบ "${name}" หรือไม่?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'ลบเลย!',
      cancelButtonText: 'ยกเลิก',
    }).then((result) => {
      if (result.isConfirmed) {
        setDeletingIds((prev) => [...prev, id]);
        setTimeout(() => {
          setStudent((prev) => prev.filter((item) => item.id !== id));
          setDeletingIds((prev) => prev.filter((d) => d !== id));
          Swal.fire('ลบแล้ว!', `"${name}" ถูกลบเรียบร้อยแล้ว`, 'success');
        }, 400);
      }
    });
  }

  useEffect(() => {
    if (showTalk) {
      let lineIndex = 0;
      let charIndex = 0;
      let currentLine = "";
      setLines([]);

      const timer = setInterval(() => {
        const fullLine = fullData[lineIndex];
        if (charIndex < fullLine.length) {
          currentLine += fullLine[charIndex++];
          setLines((prev) => {
            const updated = [...prev];
            updated[lineIndex] = currentLine;
            return updated;
          });
        } else {
          charIndex = 0;
          currentLine = "";
          lineIndex++;
          if (lineIndex >= fullData.length) {
            clearInterval(timer);
          }
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [showTalk]);

  return (
    <div className="container mt-5">
      {/* ✅ ส่งฟังก์ชันเข้า AddForm */}
      <AddForm onAdd={handleAddStudent} />

      <h1 className="text-center mb-4">Unlimited Blade Works</h1>

      <div className="d-flex justify-content-center gap-3 mb-4">
        <button className="btn btn-success" onClick={() => setShowTalk(true)}>แสดงบทพูด</button>
        <button className="btn btn-primary" onClick={() => setShowList(true)}>แสดงรายการ</button>
        <button className="btn btn-secondary" onClick={() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setShowList(false);
            setShowTalk(false);
            setLines([]);
            setIsFadingOut(false);
          }, 500);
        }}>ซ่อนทั้งหมด</button>
      </div>

      <div className={`fade-wrapper ${isFadingOut ? "fade-out" : "fade-in"}`}>
        {showList && (
          <>
            <h4 className="mb-3">Total: {student.length}</h4>
            <div className="list-group">
              {student.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  gender={item.gender}
                  onDelete={deleteStudent}
                  deleting={deletingIds.includes(item.id)}
                />
              ))}
            </div>
          </>
        )}

        {showTalk && (
          <div className="list-group">
            {lines.map((line, i) => (
              <div key={i} className="list-group-item mono-font fade-in-item">
                {line}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
