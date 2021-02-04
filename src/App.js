import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="container">
      <Router>
        <header>
          <h1>
            <Link to="/">Bank OCR</Link>
          </h1>
        </header>

        <main>
          <Route exact path="/" component={MainPage} />
          <Route path="/file/:fileName" component={ResultPage} />
        </main>
      </Router>

      <footer>
        <a href="https://github.com/noemiGyorgy/bank-ocr" target="_blank">
          Check out the code on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
