import "./App.css";
import Header from "./components/Header";
import Output from "./components/Output";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <form>
          <table>
            <tr className="fields">
              <th>First Number:</th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr className="fields">
              <th>Second Number:</th>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr className="fields">
              <th></th>
              <td>
                <button>Generate Steps</button>
              </td>
            </tr>
          </table>
        </form>
        <Output />
      </div>
    </div>
  );
}

export default App;
