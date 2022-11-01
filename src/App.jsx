import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import * as S from "./styles.home";

function App() {
  return (
    <S.Container>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Form />} />
          <Route exact path="/users" element={<UserInfo />} />
        </Routes>
      </Router>
    </S.Container>
  );
}

export default App;
