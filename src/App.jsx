import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Vendors from "./components/Vendors";
import Layout from "./components/Layout";
import Compare from "./components/Compare";
import AWSBilling from "./components/AWSBilling";
import OrderManagement from "./components/orderManagement/OrderManagement";
import Procurement from "./components/procurement/Procurement";
import PODrafting from "./components/procurement/PODrafting";
import InventoryManagement from "./components/procurement/InventoryManagement";
import QuoteComparison from "./components/procurement/QuoteComparison";
import Comparison from "./components/comparison/Comparison";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="compare" element={<Compare />} />
          <Route path="vendors" element={<Vendors />} />
          <Route path="awsbilling" element={<AWSBilling />} />
          <Route path="ordermanagement" element={<OrderManagement />} />
          <Route path="procurement" element={<Procurement />}>
            <Route path="poddrafting" element={<PODrafting />} />
            <Route
              path="inventorymanagement"
              element={<InventoryManagement />}
            />
            <Route path="quotecomparison" element={<QuoteComparison />} />
          </Route>
          <Route path="comparison" element={<Comparison />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
