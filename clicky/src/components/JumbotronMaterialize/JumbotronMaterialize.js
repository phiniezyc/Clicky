import React, {Component} from 'react';

const jumbotronStyle = {
    // paddingBottom: '150px',
    // boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
   

};

class JumbotronMaterialize extends Component {
    render() {
        return (
            <div className='container'>
                <div className="card-panel grey lighten-2" style={jumbotronStyle} id='scoreBoard'>
                    <div className="container">
                        <h1>Score Board</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur...jjjfjafjjafkjasfjasjfjafjajfkjafjjfjafjakfjajfjafjkajfjafjajfkjafjafljakfjajfkjafkjsajjafjasfjjfkjafjafjajf;ajjaf</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default JumbotronMaterialize;