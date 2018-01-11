import React, { Component }from 'react';




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

        // const shuffledImages= shuffle(this.props.imagesToDisplay); // code that shuffles images 
    
    }

    hello() {
        console.log("hello");
    }
    

    // shuffle(a) {
    //     for (let i = a.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [a[i], a[j]] = [a[j], a[i]];
    //     }
    //     return a;
    // }

    render(props) {
        return (
            <div>
                {this.props.imagesToDisplay.map((image, i) => {
                    return (
                        <div key={i} className='imageBoxes' onClick={this.hello}>
                            <div className='nameDisplay'>
                            <h6 className='fontControl' key={image.name}>{image.name}</h6>
                            </div> 
                            <div>                          
                            <img key={i} src={image.image} alt=''  ></img >
                            </div> 
                        </div>
                    )
                })}
            </div>
        )
    }
} 

    

export default Images;