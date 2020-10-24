import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container } from 'reactstrap';

const Dates = (props) => {
    return (
        <Container fluid>
            <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
                <span className="toggle-btn" onClick={props.handleToggleSide}>
                    { !props.toggleSide ? <FaTimes /> : <FaBars /> }
                    <h4>Date</h4>
                </span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus laborum praesentium reprehenderit similique labore eum perferendis iusto voluptate laudantium iure alias, dicta facere est rem quis ipsa provident numquam placeat repellendus nihil molestiae? Non quidem soluta eum, deleniti facere velit atque voluptatibus vitae vero repellendus quae voluptate natus quibusdam. Iste!</p>
            </div>
        </Container>
    );
}

export default Dates;
