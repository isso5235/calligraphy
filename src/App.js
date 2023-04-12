import logo from './logo.svg';
import './App.css';
import { ReactPainter } from 'react-painter';
import {useRef} from 'react';


function App() {
  const canvasRef = useRef(null);
  const clearCanvas = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <ReactPainter
            width={500}
            height={500}
            initialLineWidth={20}
            ref={canvasRef}
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
