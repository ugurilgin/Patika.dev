import React from 'react'

function Card (props) {
    return (
    <div className="card">
        <img src={props.img} alt="Avatar" style={{width:"100%"}}/>
            <div className="container">
                <h4><b>{props.name}</b></h4> 
                <p>{props.about}</p> 
            </div>
    </div>
    )
}

export default Card
