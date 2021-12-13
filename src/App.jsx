
  
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss"; 
import ProjectOverview from "./pages/ProjectOverview/ProjectOverwiew";

function App() {
	return ( 
			<BrowserRouter>
				<Switch>
					<Route path="/" component={ProjectOverview} exact />  
				</Switch> 
		   </BrowserRouter>
	);
}

export default App;