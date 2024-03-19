import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { Home } from "./Pages/Home/Home";
import { Cart } from "./Pages/Cart/Cart";
import { Profile } from "./Pages/Profile/Profile";
import { Filter } from "./Pages/Filter/Filter";
import { CreateProduct } from "./Pages/Create-product/CreateProduct";
import { SingleData } from "./Pages/Single-Data/SingleData";
// import { EditProfile } from "./Pages/Edit-Profile/EditProfile";
import { Auth } from "./Pages/Login/Auth";
import { Login } from "./Pages/Login/Components/Login";
import { Registerr } from "./Pages/Login/Components/Registerr";
import { Settings } from "./Pages/Profile/Pages/Settings/Settings";
import { Ad } from "./Pages/Profile/Pages/Ad/Ad";
import { Message } from "./Pages/Profile/Pages/Message/Message";
import { Promo } from "./Pages/Profile/Pages/Promo/Promo";
import { Payment } from "./Pages/Profile/Pages/Payment/Payment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
          {/* <Route path="edit-profile" element={<EditProfile />} /> */}
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Ad />} />
          <Route path="message" element={<Message />} />
          <Route path="payment" element={<Payment />} />
          <Route path="settings" element={<Settings />} />
          <Route path="promo" element={<Promo />} />
        </Route>
        <Route path="/filter/:datakey" element={<Filter />} />
        <Route path="/product/:datakey/:id" element={<SingleData />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registerr />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
