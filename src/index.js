import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = { lat: 100 }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }
    render () {
            return (
            <div>
                Hello world @LATITUDE : {this.state.lat}
                <SeasonDisplay></SeasonDisplay>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
