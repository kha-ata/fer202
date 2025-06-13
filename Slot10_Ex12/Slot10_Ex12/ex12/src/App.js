import './App.css';
import Count from './components/Exercise1';
import ControlledInputField from './components/Exercise2';
import ToggleVisibility from './components/Exercise3';
import TodoList from './components/Exercise4';
import ColorSwitcher from './components/Exercise5';
import SearchFilter from './components/Exercise6';
import DragAndDropList from './components/Exercise7';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <h1 className="title">Ex1</h1>
      <Count />
      <h1 className="title">Ex2</h1>
      <ControlledInputField />
      <h1 className="title">Ex3</h1>
      <ToggleVisibility />
      <h1 className="title">Ex4</h1>
      <TodoList/>
      <h1 className="title">Ex5</h1>
      <ColorSwitcher/>
      <h1 className="title">Ex6</h1>
      <SearchFilter/>
      <h1 className="title">Ex7</h1>
      <DragAndDropList/>
    </>
  );
}

export default App;
