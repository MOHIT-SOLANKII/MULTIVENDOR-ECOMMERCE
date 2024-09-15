import { useState } from "react";
import Router from "./router/Router";



function App() {

  const [allRoutes, setAllRoutes] = useState([])
  // As of noe allRoutes has no routes, so it is an empty array.

  return <Router allRoutes={allRoutes} />
  // We can update allRoutes with the routes that we want to render in our application. We can pass allRoutes as a prop to the Router component.

    

}

export default App;
