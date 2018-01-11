import React from 'react';

import { Card, Col } from 'react-materialize';

import imagedisplay from './ImageDisplay';

import friends from '../../friends';


const PicturesBox = (props) => (
    <div className='container cards'>
        <Col m={6} s={12}>
		<Card className='blue-grey darken-1' textClassName='white-text' title='Pictures Box'>
		I am a very simple card.
        {props.friend.map((friend, i) => {
            return <h1 key={i}> {friend.name } </h1>
        })}
        <imagedisplay i />
	    </Card>
</Col>
    </div>
);

export default PicturesBox;