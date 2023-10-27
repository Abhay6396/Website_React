import React from "react";
import Card from "./Card";

function Service() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div class="container text-center">
                <div class="row">
                    <Card />
                </div>
            </div>
        </>
    );
}

export default Service;