import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Setting = (props) => {
    return (
        <div className={`content-wrapper content-wrapper--${!props.toggleSide ? 'show' : 'hide'}`}>
            <span className="toggle-btn" onClick={props.handleToggleSide}>
                {!props.toggleSide ? <FaTimes /> : <FaBars />}
                <h4>Setting</h4>
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta omnis quisquam nobis perferendis! Ut saepe explicabo totam delectus mollitia nostrum eligendi voluptate inventore repellat ipsum ipsa, maxime velit eum corrupti perspiciatis. Ullam voluptate perspiciatis odit quidem, vero dignissimos reiciendis ratione? Perspiciatis nihil, officiis omnis voluptates deleniti nesciunt eius maxime labore et laudantium, cum, nulla earum ad nobis quaerat eum. Iste incidunt aliquam deleniti, architecto ipsa officia! Cumque unde officiis, culpa dolorem maiores nesciunt iste est totam ab maxime delectus eius voluptates sit consequuntur, suscipit amet, fugit repellendus. Fugiat ratione tenetur earum enim doloremque similique iure ipsum, ipsa nemo, quia odio?</p>
        </div>
    );
}

export default Setting;
