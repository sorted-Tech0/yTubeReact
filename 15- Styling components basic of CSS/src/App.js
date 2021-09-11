import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import Parent from './components/Parent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css';
import styles from './appStyle.module.css';

function App() {
  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroname="Batman">
        <p>This is children props.</p>
      </Greet>
      <Greet name="Clark" heroname="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroname="Wonderwomen"/>
      <Welcome name="Bruce" heroname="Batman"/> */}
      {/* <Welcome name="Clark" heroname="Superman"/>
      <Welcome name="Diana" heroname="Wonderwomen"/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
