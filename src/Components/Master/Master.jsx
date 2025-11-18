import React from "react";
import Main from "./Components/Main/Main";
import Stocks from "./Components/Stocks/Stocks";
import Whyus from "./Components/Whyus/Whyus"
import Card from "./Components/Map/Map"

function Master() {
    return (
        <div>
            <Main />
            <Stocks />
            <Whyus />
            <Card />
        </div>
    )
}

export default Master;