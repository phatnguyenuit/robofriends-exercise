import React, {Component} from 'react'
import {connect} from 'react-redux'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import RoboList from '../components/RoboList'
import SearchBox from '../components/SearchBox'
import './App.css'

import {setSearchInput, requestRobos} from '../actions'
const mapStateToProps = state => {
    return {
        //get state base on the reducer (reducer searchRobos)
        searchInput: state.searchRobosReducer.searchInput,
        robos: state.requestRobosReducer.robos,
        isPending: state.requestRobosReducer.isPending,
        error: state.requestRobosReducer.error,
    }
}
const mapDispatchToProps = dispatch => ({
    onChangeInput: (event) => dispatch(setSearchInput(event.target.value)),
    // thank for redux thunk
    onRequestRobos: () => dispatch(requestRobos())
})


class App extends Component{
    componentDidMount(){
        this.props.onRequestRobos()
    }
    render(){
        const { searchInput, onChangeInput, robos, isPending } = this.props;
        const filteredRobos = robos.filter(
            robo => robo.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        return isPending ? (<h1>Loading</h1>):
        (
            <div className="tc">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox onChange={onChangeInput} searchValue={searchInput}/>
                <Scroll>
                    <ErrorBoundary>
                        <RoboList robos={filteredRobos}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

// Connect the App component with redux to get new props from centre state
export default connect(mapStateToProps, mapDispatchToProps)(App); 