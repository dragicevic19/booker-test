import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHome from "./admin/pages/home/AdminHome";
import AdminList from "./admin/pages/list/AdminList";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./admin/pages/single/Single"
import New from "./admin/pages/new/New"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/hotels" element={ <List /> }/>
        <Route path="/hotels/:id" element={ <Hotel /> }/>
        <Route path="/login" element={ <Login />} />


        <Route path="/admin">
          <Route index element={ <AdminHome /> } />
          <Route path="users">
            <Route index element={ <AdminList /> } />
            <Route path=":userId" element={ <Single /> }/>
            <Route path="new" element={ <New /> }/>
          </Route>

          <Route path="products">
          <Route index element={ <AdminList /> } />
            <Route path=":productId" element={ <Single /> }/>
            <Route path="new" element={ <New /> }/>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
