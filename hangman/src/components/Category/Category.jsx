import React from 'react';
import CardData from "./CardData"
import Card from "../Card/Card"
const arr=["movie","fruit","vehicel","color"];

function card(val){
    return(
        <div>
        <Card
            photo={val.image}
            title={val.title}
        />
        </div>
    )
}

const Category=()=>{
    return(
        <>
        <p id="CategoryHeading"> CATEGORY</p>
        <div class="CategoryCard">
           {CardData.map(card)}
        </div>
        </>
    );
}

export default Category;