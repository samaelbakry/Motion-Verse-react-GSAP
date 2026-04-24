import About from "./components/sections/About";
import Hero from "./components/sections/Hero";

const App = () => {
	return<>
	<main className="min-h-screen w-screen relative overflow-x-hidden">
		<Hero/>
		<About/>
	</main>
 	</>
};

export default App;
