import {useEffect, useState} from "react";
import {getAllStudents} from "./client";
import './App.css';

const App = () => {
    const [students, setStudents] = useState([]);
    const fetchStudents = () => {
        getAllStudents().then(res => res.json()).then(data => setStudents(data));
    }

    useEffect(() => {
        console.log("component is mounted!")
        fetchStudents();
    }, []);

    if (students.length <= 0) {
        return "no data";
    }

    return (
        <div>{students.map((student, index) =>
            <div key={index}>{student.id} {student.name}</div>
        )}</div>
    );
}

export default App;
