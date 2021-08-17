import { Switch, Route } from 'react-router-dom';

// importing layouts
import LandingPageLayout from './layouts/LandingPageLayout';

// importing pages
import HomePage from './pages/Home';

function App() {
	return (
		<Switch>
			<Route path='/'> 
				<LandingPageLayout>
					<HomePage />
				</LandingPageLayout>
			</Route>
		</Switch>
	);
}

export default App;
