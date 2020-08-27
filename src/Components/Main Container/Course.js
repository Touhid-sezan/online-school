import React from 'react';
import './Course.css'

const Course = (props) => {
    const {img, name, by, price} = props.course;
    return (
        <div className="row courses-list">
            <div className="col-md-4" id="course-img">
                <img src= {img} alt=""/>
            </div>
            <div className="col-md-8" id="course-text">
                <h4>{name}</h4>
                <h6>Instructor:-{by}</h6>
                <h6>${price}</h6>
                <button className="btn btn-primary" onClick={() => props.handleCart(props.course)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;