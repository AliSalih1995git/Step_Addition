import { useState } from "react";
import Header from "./components/Header";
import Output from "./components/Output";
import axios from "axios";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState({});

  const handleAddition = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/addition", {
        num1,
        num2,
      });
      setError("");
      setResult(response.data);
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <form onSubmit={handleAddition}>
          <table>
            <tr className="fields">
              <th>First Number:</th>
              <td>
                <input
                  type="text"
                  value={num1}
                  onChange={(e) => setNum1(e.target.value)}
                />
              </td>
            </tr>
            <tr className="fields">
              <th>Second Number:</th>
              <td>
                <input
                  type="text"
                  value={num2}
                  onChange={(e) => setNum2(e.target.value)}
                />
              </td>
            </tr>
            <tr className="fields">
              <th></th>
              <td>
                <button type="submit">Generate Steps</button>
              </td>
            </tr>
          </table>
        </form>
        {error ? <p className="error">{error}</p> : ""}
        <Output result={result} />
      </div>
    </div>
  );
}

export default App;
