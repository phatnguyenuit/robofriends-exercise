import React from 'react'
import Robo from './Robo'

const RoboList = ({robos}) => (
    <div>
        {robos.map(robo => <Robo value={robo} key={robo.id}/>)}
    </div>
);
export default RoboList