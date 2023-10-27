import React from "react";
import web from '../src/images/3714960.jpg'
import Common from "./Common";

function Home(){
    return(<Common
        title="Grow your business with"
        btnname="Get start"
        imglink={web}
        visit='/service'
        desc='🌐 Welcome !
        🚀 Where Innovation Meets Development.
        👩‍💻 Our Team:
        🌟 Expert Developers: Bringing your vision to life.
        🚀 Innovative Thinkers: Pioneering the latest tech trends.
        🤝 Client-Focused: Your success is our success.'
        brand="Abhay Deshwal"
    />)
}
export default Home;