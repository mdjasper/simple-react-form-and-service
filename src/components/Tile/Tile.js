import React from 'react';
import './Tile.css'

export default ({
    img = "", 
    title = "TITLE MISSING",
    subTitle=""
}) => (
    <div className="tile">
        <figure>
            <img src={img} alt={title}/>
        </figure>
        <section>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </section>
    </div>
);