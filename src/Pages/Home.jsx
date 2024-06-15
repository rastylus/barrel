import React, {useState} from "react";
import { Link } from "react-router-dom";

function Home() {


return(
    <>
    <h1>Barrel</h1>
    <p>test home</p>
    <Link to="/gallery">gallery</Link>
    </>
);

}
export default Home;