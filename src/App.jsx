import React from "react";
import "./App.css";
import StudentList from "./components/StudentList";
import Header from "./components/Header";
import AddForm from "./components/AddForm";

export default function App() {
  return (
    <div className="app-container">
      <Header title = "Computer Science"/>
      <main>
        <StudentList />
      </main>
    </div>
  );
}
