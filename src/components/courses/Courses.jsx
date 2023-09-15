import { useState } from "react";
import Course from "../course/Course";
import { useEffect } from "react";


const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
        .then(response => response.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-4 col-span-3">
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;<h1>Courses here</h1>