import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListPost from "./components/ListPost";
import EditPost from "./components/EditPost";
import AddPost from "./components/AddPost";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ListPost />} />
					<Route path="/edit/:uuid" element={<EditPost />} />
					<Route path="/create/post" element={<AddPost />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
