import './Random.css'
import React from 'react';

const Random = () => {
    return (
        <div>
            <title> EXPLOREBOS </title>
            {/* <link rel="stylesheet" href="../src/random.css" /> */}
            <div className="titleBody">
                <h1 style={{ fontSize: "380%" }} className="centered">
                {" "}
                ExploreBOS{" "}
                </h1>
                <p style={{ fontSize: "200%" }} className="centered">
                View your random place!
                </p>
            </div>
            <div className="post">
                <div className="flex-container">
                <div>Image here</div>
                <div>
                    <div className="post">
                    <div>show place name</div>
                    <div>show place address</div>
                    </div>
                </div>
                </div>
                <div className="flex-container">
                <div>list of names of places nearby </div>
                <div> more place info, like hours </div>
                </div>
                <div className="leftCenter">
                <button className="button button1"> Surprise Me (Random) </button>
                </div>
                <div className="rightCenter">
                <button className="button button1"> I Have Ideas (Filter) </button>
                </div>
            </div>
        </div>
    );
};

export default Random;