
import { useRoutes } from "react-router-dom";

const Router = ({ allRoutes }) => {

// This function will accept {allRoutes} as a prop which contains all the routes that we want to render in our application with their path and element attributes

    const routes = useRoutes([...allRoutes]);
    
    // The useRoutes hook will return the matched route based on the current URL path and will render the component that is associated with that route.Given route is stored in a variable called routes.

    return routes;
    
    //Returning routes means returning the required jsx component based on the current URL path.
};

export default Router;
