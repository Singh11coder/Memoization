import React from 'react'

const Home = () => {
 
  console.log("Home Rendering....");
  return (
    <div>
      <h1>This is Home </h1>
    </div>
  )
}

export default React.memo(Home);
