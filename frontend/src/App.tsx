import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { type FC } from "react";

const App: FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<CharacterList />} />
				<Route path='/characters/:name' element={<CharacterDetails />} />
			</Routes>
		</Router>
	);
};

export default App;
