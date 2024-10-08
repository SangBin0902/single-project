import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./index.jsx";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
