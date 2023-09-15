import { useState } from "react";
import Course from "../course/Course";
import { useEffect } from "react";
import PropTypes from 'prop-types';


const Courses = ({handleAddCourse}) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
        .then(response => response.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-4 col-span-3">
            {
                courses.map(course => <Course key={course.id} course={course} handleAddCourse={handleAddCourse}></Course>)
            }
        </div>
    );
};
Courses.propTypes = {
    handleAddCourse: PropTypes.func,
}

export default Courses;<h1>Courses here</h1>