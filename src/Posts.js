import React from 'react';
import Post from './Post';

const posts =() => {
    return(
        <div>
            <Post title="My first post"/>
            <Post title="My 2nd post"/>
            <Post title="My 3rd post"/>
            <Post title="My 4th post"/>
        </div>
    );
}

export default posts;