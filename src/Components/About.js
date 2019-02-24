import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () =>{
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit aperiam rerum aut magnam officia porro sequi quam fugit, sunt optio ex, earum repellendus molestias, accusamus architecto? Reiciendis, ad voluptates?</p>
        </div>

    );
};

export default Rainbow(About)