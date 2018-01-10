import React from 'react';

import { Card, Col } from 'react-materialize';


// import logo from '../logo.svg';

const ScoreBoard = () => (
    <div className='cards'>
       <Col m={6} s={12}>
		<Card className='blue-grey darken-1' textClassName='white-text' title='Score Board'>
		I am a very simple card.
		</Card>
</Col>
    </div>
);

export default ScoreBoard;