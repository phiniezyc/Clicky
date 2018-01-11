import React, { Component }from 'react';

// import { Card, CardTitle } from 'react-materialize';

class Images extends Component {
    constructor(props) {
        super(props);

        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        const shuffledImages = shuffle(Images);

    }

    render() {
        return (
            <div>
                {this.props.imagesToDisplay.map((image, i) => {
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
    }
} 

// ((props) => {
//     // function shuffle(a) {
//     //     for (let i = a.length - 1; i > 0; i--) {
//     //         const j = Math.floor(Math.random() * (i + 1));
//     //         [a[i], a[j]] = [a[j], a[i]];
//     //     }
//     //     return a;
//     // }

//     // const shuffledImages = shuffle(Images);
//     // console.log(shuffledImages);
    

//     return (
//             <div>
//                 {props.imagesToDisplay.map((image, i) => {
//                     return (
//                         // <Card  id='cardSize'className='small text-darken-4'
// 	                    //     header={<CardTitle image={image.image}>{image.name} </CardTitle>}
// 	                    //     actions={[<a href='/'>This is a Link</a>]}>
//                         //     {/* {image.name} */}
                        
//                         // </Card>
//                         <div key={i} className='imageBoxes'>
//                             <div className='nameDisplay'>
//                             <h6 className='fontControl' key={image.name}>{image.name}</h6>
//                             </div> 
//                             <div>                          
//                             <img key={i} src={image.image} alt=''></img >
//                             </div> 
//                         </div>
//                     )
//                 })
//                 }
//             </div>
//         )
// });
    
    


export default Images;