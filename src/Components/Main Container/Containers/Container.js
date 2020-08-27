import React, { useState } from 'react';
import './Container.css';
import Course from '../Course';
import courseData from '../../../FakeData/courseData';



const Container = () => {
    const course12 = courseData.slice(0, 12);
    const [courses, setCourses] = useState(course12);
    

    return (
        <div className="container">
            <div className="row course-area">
                <div className="course-container col-md-9">
                    {courses.map(cs => <Course course={cs}></Course>)}
                </div>
                <div className="cart-container col-md-3">
                    <h1>Cart</h1>
                </div>
            </div>

        </div>
    );
};

export default Container;