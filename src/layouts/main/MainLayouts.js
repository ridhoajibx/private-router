import React from 'react';
import Header from '../../components/Header';

const MainLayouts = (props) => {
    return (
        <div>
            <Header display={props.display} />
            <div>
                {props.children}
            </div>
        </div>
    );
}
export default MainLayouts;