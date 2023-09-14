// import React from 'react'
import Children from "./component/Card/Children";
import "./App.css";
import Card from "./component/Card/Card";
import UseStatesArr from "./component/UseState/UseStatesArr";
import UseStatesObj from "./component/UseState/UseStatesObj";
import USeEffect from "./component/UseEffect/USeEffect";
import FetchData from "./component/UseEffect/FetchData";

function App() {
  /*   return (
    React.createElement("div", null,
    React.createElement("h1", null, "hello"))
    ) */

  // https://babeljs.io/    classic

  const title = "My New Title";
  const anotherTitle = "New Title"
  const views = "100K";

  const myObj ={
title :"3rd Title"
  }

  return (  

    <>
    <h1 className="text-5xl text-center font-bold my-10">Dynamic Card,Props,useStates</h1>
    <div className="container mx-auto w-11/12 grid grid-cols-3 gap-8">
      <Card title={title} views = {views}/>
      <Card title={anotherTitle}/>
      <Card title={myObj.title}/>
      <Card />
      <Card />
      <Card />
    </div>
    <Children>
      <p className="text-2xl text-center">I am Children Props</p>
    </Children>
    <UseStatesArr/>
    <UseStatesObj/>
    <USeEffect/>
    <FetchData />
    </>
  );
}

export default App;
