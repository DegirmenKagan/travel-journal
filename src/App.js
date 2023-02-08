import data from "./data.js";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  /*Data array in a separate js file
  Title, location, Google Maps link, start date, end date, description, image URL
  Use . map () and props
  Styled & polished */
  return (
    <div className="App">
      <Header />

      {data.map((item, index) => {
        return <Card key={"card" + index} item={item} />;
      })}
    </div>
  );
}

export default App;
