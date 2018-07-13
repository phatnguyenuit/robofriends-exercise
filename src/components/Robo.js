import React from 'react'

const Robo = ({value}) => {
    const {id, email, name} = value;
        return(
            <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
                <img src={`https://robohash.org/${id}}?size=200x200`} alt={name}/>
                <div className="ma2">
                    <strong>{email}</strong>
                    <p>{name}</p>
                </div>
            </div>
        );
}
export default Robo;