import logo from "../../pangolin_logo.png";
import { SiteNavBar } from "../../components/SiteNavBar";
import "./Home.css";

export function Home() {
  return (
    <div className="App">
      <SiteNavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">Pangolin Software Solutions</h1>
      </header>
    </div>
  );
}
