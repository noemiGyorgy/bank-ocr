import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Bank OCR</h1>
      </header>

      <main>
        <Router>
          <Route exact path="/" component={MainPage} />
        </Router>
      </main>
      <footer>
        <a href="https://github.com/noemiGyorgy/bank-ocr" target="_blank">
          Check out the code on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
