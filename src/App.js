import './App.css';
import { ReactPainter } from 'react-painter';

function App() {
  const clearCanvas = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <ReactPainter
            width={500}
            height={500}
            initialLineWidth={20}
            render={({ canvas }) => (
          <div>
            <div className="Title">GMDay 今年の一文字</div>
            <div className="Paint">{canvas}</div>
          </div>
        )}
      />
      <button onClick={() => (clearCanvas())}>
        白紙
      </button>
    </div>
  );
}

export default App;
