import { useCallback, useMemo, useState } from 'react';
import Home from './components/Home';
import About from './components/About';


const App = () => {
  console.log("App Rendering")
  const [count , setCount] = useState(0);
  const [user,setUser] = useState({id:1,name:"Wow"});

  let greet = useCallback(() => {
    console.log("Greeting");
  },[]);

  let ans = useMemo(() => {
    console.log('running.....')
     let sum=0;
     for(let i=1;i<=1000000000;i++){
         sum+=i;
     }

     return sum;
  },[])
  
  return (
    <div>
       <h1>Count is: {count}</h1>
       <h1>Name: {user.name}</h1>
       <h1>Value is: {ans}</h1>
       <button onClick={()=>setCount(prev => prev+1)}>Increment</button>
       <button onClick={()=>setUser((prev) => ({...prev,name:"Singh"}))}>Change Name</button>
       <Home greet={greet}/>
       <About greet={greet}/>
    </div>
  )
}

export default App;
