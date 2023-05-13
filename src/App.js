import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [carIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {carIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShownCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
