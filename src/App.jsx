import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import Navbar from "./components/Ui/Navbar";

const App = () => {
	return<>
	<main className="min-h-screen w-screen relative overflow-x-hidden">
		<Navbar/>
		<Hero/>
		<About/>
		<Features/>
	</main>
 	</>
};

export default App;
