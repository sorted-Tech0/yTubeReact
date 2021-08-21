import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroname="Batman">
        <p>This is children props.</p>
      </Greet>
      <Greet name="Clark" heroname="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroname="Wonderwomen"/>
      <Welcome name="Bruce" heroname="Batman"/>
      <Welcome name="Clark" heroname="Superman"/>
      <Welcome name="Diana" heroname="Wonderwomen"/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
