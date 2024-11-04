import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./index.jsx";
import SalesPerformance from "./salesPerformance.jsx";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/sales" element={<SalesPerformance/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
