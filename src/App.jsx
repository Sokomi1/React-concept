import React from "react";
import "./App.css";
import StudentList from "./components/StudentList";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <StudentList />
      </main>
    </div>
  );
}
