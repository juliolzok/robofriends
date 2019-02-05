import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        console.log (this.props.store.getState())
        fetch('https://jsonplaceholder.typicode.com/users').then( response => response.json()).then(users => this.setState({robots: users}));
    }


    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });


    }

    render(){
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
        <div className='tc'>
            <h1 className='code f1 washed-blue o-70'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>

        </div>
        )

    }

}

export default App;