import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "./index.jsx";
import SalesPerformance from "./salesPerformance.jsx";
import Todolist from "./todolist.jsx";
import DiaryHome from "./diaryHome.jsx";
import New from "./new.jsx";
import Diary from "./diary.jsx";
import DiaryEditor from "./diaryEditor.jsx";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />}/>
                    <Route path="/sales" element={<SalesPerformance />}/>
                    <Route path="/todo" element={<Todolist />}/>
                    <Route path="/diaryhome" element={<DiaryHome />}/>
                    <Route path="/new" element={<New />}/>
                    <Route path="/diary/:id" element={<Diary />}/>
                    <Route path="/edit" element={<DiaryEditor />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
