import React from 'react';
import '../assets/css/loadingSpinner.css'



const LoadingSpinner = (props) => {
    let {size = "10rem", color="#ffffff", bsColor=""} = props;

    return(
        <div className='spinner'>
           &nbsp;
           <div className={"spinner-border" + bsColor} style={{height: size, width: size, color}} role="status">
                <span className="visually-hidden">Loading ...</span>
           </div>
        </div>
    );
}

export default LoadingSpinner;