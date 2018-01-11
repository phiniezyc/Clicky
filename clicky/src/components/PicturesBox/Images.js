import React from 'react';

import { Card } from 'react-materialize';

const Images = ((props) => {
    return (
        <div>
            {props.imagesToDisplay.map((image, i) => {
                return (
                <h1 key={i}> {image.name} </h1>
                )
            })
            }
        </div>
    )
});
    
    


export default Images;


// {props.friend.map((friend, i) => {
//     return <h1 key={i}> {friend.name } </h1>
// })}

