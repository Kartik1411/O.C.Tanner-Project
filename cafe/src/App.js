import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importing layouts
import LandingPageLayout from './layouts/LandingPageLayout';

// importing pages
import BookTable from './pages/BookTable';
import Offers from './pages/Offers';
import Menu from './pages/Menu';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={LandingPageLayout}> 
					<LandingPageLayout message="Welcome to Hard Rock Cafe" />
				</Route>
				<Route path='/book-table' exact component={BookTable} /> 
				<Route path='/offers' exact component={Offers} />
				<Route path='/menu' exact component={Menu} />
			</Switch>
		</Router>
	);
}

export default App;
