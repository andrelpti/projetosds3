import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <div className="bg-dark">
        <NavBar />
        <div className="container">
          <h1 className="text-primary py-3">Dashboard de Vendas</h1>

          <div className="row px-4 bg-white">
            <div className="col-sm-6">
              <h5 className="text-center text-primary"> Taxa de sucesso (%)</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-primary"> Total de Vendas</h5>
              <DonutChart />
            </div>
          </div>

          <div className="py-3">
            <h1 className="text-primary">Todas Vendas</h1>
          </div>

          <DataTable />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
