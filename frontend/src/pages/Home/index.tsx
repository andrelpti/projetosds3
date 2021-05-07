import Footer from "components/Footer"
import NavBar from "components/NavBar"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container bg-dark py-3">
                <div className="jumbotron">
                    <h1 className="display-4 text-dark"><b>DSVendas</b></h1>
                    <p className="lead text-dark"><b>Analise o desempenho das suas vendas por diferentes perspectivas</b></p>
                    <hr />
                    <p className="text-dark"><b>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</b></p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        <b>Acessar Dashboard</b>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;