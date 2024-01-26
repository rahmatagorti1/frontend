import logo from "./logo.svg";
import "./App.scss";
import ProductsList from "./views/products-list";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="SideBarContainer">
        <SideBar />
      </div>
      <div className="BodyContainer">
        <div className="NavBar">
          <NavBar />
        </div>
        <div className="Body">
          <Header></Header>
          <ProductsList />
          <div className="Footer">
            <Footer />
          </div>
        </div>
      </div>

      {/* <NavBar /> */}

      {/* <ProductsList /> */}
    </div>
  );
}

export default App;
