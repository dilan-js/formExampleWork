import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import FormHousing from "./FormHousing";

function App() {
  return (
    <div className="App">
      <form>
        <div style={{ backgroundColor: "red" }}>
          YAAA
          <div>What college do you attend?</div>
          <input type="radio" value="Stanford" name="college" /> Stanford
          <input type="radio" value="Yale" name="college" /> Yale
          <input type="radio" value="Harvard" name="college" /> Harvard
        </div>
      </form>
      <FormHousing>
        <Form />
      </FormHousing>
    </div>
  );
}

export default App;
