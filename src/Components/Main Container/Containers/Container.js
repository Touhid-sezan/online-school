import React, { useState } from 'react';
import './Container.css';
import Course from '../Course';
import courseData from '../../../FakeData/courseData';
import Cart from '../Cart';



const Container = () => {
    const course12 = courseData.slice(0, 12);
    const [courses] = useState(course12);
    const [cart, setCart] = useState([]);

    const handleCart = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="row course-area">
                <div className="course-container col-md-9">
                    {courses.map(cs => <Course course={cs}  handleCart={handleCart}></Course>)}
                </div>
                <div className="cart-container col-md-3">
                   <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Container;