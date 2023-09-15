import { useState } from "react";
import Course from "../course/Course";
import { useEffect } from "react";


const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
        .then(response => response.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className="grid grid-cols-3 col-span-3">
            <Course></Course>
            <Course></Course>
            <Course></Course>
            <Course></Course>
        </div>
    );
};

export default Courses;<h1>Courses here</h1>