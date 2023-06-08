import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// component
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container mx-auto">
      <header className="mb-5">
        <Header />
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
