import "./App.css";
import Header from "./Header";
import ProductList from "./ProductList";
import LatesTrend from "./LatesTrend";
import Footer from "./Footer";
import { products } from "./mock/index";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList productItems={products} />
      <LatesTrend />
      <Footer />
    </div>
  );
}

export default App;
