import { Switch, Route } from 'react-router-dom';

// importing layouts
import LandingPageLayout from './layouts/LandingPageLayout';

// importing pages
import HomePage from './pages/Home';

function App() {
	return (
		<Switch>
			<Route path='/'> 
				<LandingPageLayout message="Welcome to Hard Rock Cafe">
					<HomePage />
				</LandingPageLayout>
			</Route>
		</Switch>
	);
}

export default App;
