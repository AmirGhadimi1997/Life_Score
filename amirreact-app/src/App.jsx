import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import ScorePage from "./components/score page/Score";






function App() {


 






  return (
    <div className="App">

     

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/ScorePage" element={<ScorePage />} />


      </Routes  >



    </div>
  );
}

export default App;
