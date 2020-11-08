import React from 'react';
import Lottie from 'react-lottie';
import * as loading from '../../assets/img/logo/loading.json';
import { connect } from 'react-redux';
import { Component } from 'react';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

class Loader extends Component {
    state = { }
    

    render() {
        const { loading } = this.props;
            if(!loading) return null;
            return (
                <div>
                    <div style={{marginTop: '10rem'}}>
                    <Lottie options={defaultOptions} height={120} width={120} />
                    
                </div>
                </div>
            );
    }
}


const MapStateToProps = (state) => {
    return {
        loading: state.isLoading
    }
}
export default connect(MapStateToProps)(Loader);