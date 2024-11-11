import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./index.jsx";
import SalesPerformance from "./salesPerformance.jsx";
import Todolist from "./todolist.jsx";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/sales" element={<SalesPerformance/>}/>
                    <Route path="/todo" element={<Todolist/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
