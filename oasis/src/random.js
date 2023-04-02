import './Random.css'
import React from 'react';

const Random = () => {
    return (
        <div>
            <title> 📍 EXPLOREBOS </title>
            {/* <link rel="stylesheet" href="../src/random.css" /> */}
            <div className="titleBody">
                <h1 style={{ fontSize: "380%" }} className="centered">
                {" "}
                📍 ExploreBOS{" "}
                </h1>
                <p style={{ fontSize: "200%" }} className="centered">
                View your random place!
                </p>
            </div>
            <div className="post">
                <div className="direction-container"> 
                <div className="header">
                🛒 100 Hanover St, Boston, MA 02108 
                    </div>
                </div>
                <div className="map-container">
                <div>
                <div className="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1243.9584261417167!2d-71.0578072516932!3d42.362204429794744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708f5790e8d7%3A0x7af99f9db52d3cf0!2sHaymarket!5e0!3m2!1sen!2sus!4v1680454014828!5m2!1sen!2sus" 
                width={100} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
                </div>
                </div>
                <div className="flex-container">
                <div className = "centered">
                   <div className = "header"> Nearby Places 🗺️  </div>
                   <div className = "body">
                   <div> North End </div>
                    <div> Faneuil Hall </div>
                    <div> City Hall </div>
                   </div>
                     </div>
                <div className = "centered"> 
                <div className = "header"> Hours ⌛ </div>
                    <div> Friday & Saturdays: 
                        <div>10am-4pm</div>
                        </div> </div>
                </div>
            </div>
        </div>
    );
};

export default Random;