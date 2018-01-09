import React from 'react';

import { Card, Col } from 'react-materialize';


// import logo from '../logo.svg';

const PicturesBox = () => (
    <div className='container cards'>
       <Col m={6} s={12}>
		<Card className='blue-grey darken-1' textClassName='white-text' title='Pictures Box' actions={[<a href='/'>This is a link</a>]}>
		I am a very simple card.
		</Card>
</Col>
    </div>
);

export default PicturesBox;