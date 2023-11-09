import React from "react"
// component should return jsx syntax
// with destructure
const Card=(props)=>{
    //created custom tag/component
    const name="another text";
    console.log(props);
    return(
        <div className="cardContainer">
            <label htmlFor="some_text">{props.cardName}</label>
            <input type="text" name="" id="some_text" /><br />
            <label htmlFor="another_text">{name}</label>
            <input type="text" name="" id="another_text" /><br />
            <label htmlFor="another_text1">{100+100}</label>
            <input type="text" name="" id="another_text1" />
        </div>
    )
}
//with destructure-----it is most preferabble 
const Card1=({cardName1,inpType})=>{
    return(
        <div className="cardContainer1">
            <label htmlFor={cardName1}>{cardName1}</label>
            <input type={inpType} name="" id={cardName1} />
        </div>
    )
}
export {Card,Card1};

