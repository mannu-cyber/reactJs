import ReactDOM from "react-dom";
import About from "./view/about/About";
import Home from "./view/home/home";
import Contact from "./view/contact/Contact";
import Login from "./view/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

const path = window.location.pathname;

if (path === "/") {
  root.render(<Home />);

} else if (path === "/login") {
  root.render(<Login/>);

} else if (path === "/about") {
  root.render(<About />);

} else if (path === "/contact") {
  root.render(<Contact/>);

} else {
  root.render("404 error");
}
