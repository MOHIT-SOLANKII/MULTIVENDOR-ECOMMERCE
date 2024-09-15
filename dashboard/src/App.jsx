import { useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";



function App() {

  const [allRoutes, setAllRoutes] = useState([...publicRoutes])
  // As of now allRoutes has all routes contained in publicRoutes.


  // console.log(allRoutes);
  

  return <Router allRoutes={allRoutes} />
  // We can update allRoutes with the routes that we want to render in our application. We can pass allRoutes as a prop to the Router component.

    

}

export default App;
