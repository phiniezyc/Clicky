import React from 'react';

import { Card, Col } from 'react-materialize';

import Images from './Images';

import friends from '../../friends';



const PicturesBox = () => (
    <div className='container cards'>
        <Col m={6} s={12}>
		<Card className='blue-grey darken-1' textClassName='white-text' title='Pictures Box'>
		I am a very simple card.
        
        <Images imagesToDisplay={friends} />
	    </Card>
</Col>
    </div>
);

export default PicturesBox;