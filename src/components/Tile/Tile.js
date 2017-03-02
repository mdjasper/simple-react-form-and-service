import React from 'react';
import './Tile.css'

export default ({
    img = "", 
    title = "TITLE MISSING"
}) => (
    <div className="tile">
        <figure>
            <img src={img} />
        </figure>
        <section>
            <h2>{title}</h2>
        </section>
    </div>
);