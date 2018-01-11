import React from 'react';

// import { Card, CardTitle } from 'react-materialize';

const Images = ((props) => {

    return (
            <div>
                {props.imagesToDisplay.map((image, i) => {
                    return (
                        // <Card  id='cardSize'className='small text-darken-4'
	                    //     header={<CardTitle image={image.image}>{image.name} </CardTitle>}
	                    //     actions={[<a href='/'>This is a Link</a>]}>
                        //     {/* {image.name} */}
                        
                        // </Card>
                        <div key={i} className='imageBoxes'>
                            <div className='nameDisplay'>
                            <h6 className='fontControl' key={image.name}>{image.name}</h6>
                            </div> 
                            <div>                          
                            <img key={i} src={image.image} alt=''></img >
                            </div> 
                        </div>
                    )
                })
                }
            </div>
        )
});
    
    


export default Images;