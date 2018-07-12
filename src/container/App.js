import React, {Component} from 'react'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import RoboList from '../components/RoboList'
import SearchBox from '../components/SearchBox'
import './App.css'

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            robos:  [],
            searchInput: ''
        };
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(jsonData=>{
            let robos = jsonData.map(robo=>Object.assign({'image': `https://robohash.org/${robo.id}?size=200x200`}, robo));
            this.setState({robos});
        });
    }

    onChangeInput = e => {
        this.setState({searchInput: e.target.value});
    }
    render(){
        const {robos, searchInput} = this.state;
        const filteredRobos = robos.filter(
            robo => robo.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        return !robos.length ? (<h1>Loading</h1>):
        (
            <div className="tc">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox onChange={this.onChangeInput} searchValue={this.state.searchInput}/>
                <Scroll>
                    <ErrorBoundary>
                        <RoboList robos={filteredRobos}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}