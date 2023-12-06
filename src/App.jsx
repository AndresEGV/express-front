import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios(import.meta.env.VITE_BACKEND);
      console.log(data);
      setUsers(data);
    };
    getUsers();
  }, []);
  const array = users.map((course) => (
    <li key={course.id}>
      <p>{course.nombre}</p>
      <span>{course.email}</span>
    </li>
  ));

  return (
    <>
      <p>{array}</p>
    </>
  );
}

export default App;
