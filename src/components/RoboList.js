import React from 'react'
import Robo from './Robo'

const RoboList = ({robos}) => {
    if(true){
        throw new Error('Nooooooooo!');
    }
    return (
        <div>
            {robos.map(robo => <Robo value={robo} key={robo.id}/>)}
        </div>
    );
};
export default RoboList