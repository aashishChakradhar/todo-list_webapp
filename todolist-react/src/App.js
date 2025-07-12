import "./styles/App.css";
import Header from "./components/static/header";
import Footer from "./components/static/footer";
import Body from "./components/todo/body";
function App() {
  return (
    <div id="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
