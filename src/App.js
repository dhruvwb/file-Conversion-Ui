import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./Components/Banner";
import { Container } from "react-bootstrap";
import DataTable from "./Components/DataTable/PdfCsv";
import PdfCsv from "./Components/DataTable/PdfCsv";

function App() {
  return (
    <div>
      <Banner />
      <PdfCsv />
    </div>
  );
}

export default App;
