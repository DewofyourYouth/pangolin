import logo from "../../pangolin_logo.png";
import "./Home.css";

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">Pangolin Software Solutions</h1>
      </header>
    </div>
  );
}
