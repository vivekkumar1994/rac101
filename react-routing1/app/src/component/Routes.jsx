import { Navbar } from "./Navbar";
import { Home} from "./Home";

import { Productdetail } from "./Productdetail";
import { Productpage } from "./Productpage";
import { Routes as S, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <>
      <Navbar />
      <S>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Productdetail />} />
        <Route path="/products" element={<Productpage />} />
      </S>
      {/* Add Routes here */}
    </>
  );
};