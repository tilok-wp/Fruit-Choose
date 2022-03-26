import './App.css';
import Header from './components/Header/Header';
import ReactAbout from './components/ReactAbout/ReactAbout';
import Shop from './components/Shop/Shop';

const reactAbout = [
  {
    id: "q1",
    heading: 'How react works?',
    paragraph: 'React is JavaScript library for creating user interface by rendering the virtual DOM and React Diffing algorithm . All component in React has a life cycle which manipulate 3 main phases are (Mounting, Updating, Unmounting). Mounting step elements are putting into the DOM. Rendering template by comparing Virtual DOM with Real DOM and display rendered component (Data, html template). '
  },
  {
    id: "q2",
    heading: 'Difference between "props" and "state"',
    paragraph: 'Without STATE in react application is only a static template. State is mutable and its  associated with the individual components. State is internal and it controlled by the component itself. Props are immutable. Props are the external it controlled when rendered the component. Props set by parent and pass to it child component. props are used to communicate between two or more components.'
  },
  {
    id: "q3",
    heading: 'How use state works?',
    paragraph: 'UseState is a function which know as "Hook" that allow to keep state variable where need a function component. It allows to declare read and update this state value. If any changes in the current state variable re-render the the component and display the update changes. '
  }

]

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <section className='about-react'>
        {reactAbout.map(item => <ReactAbout 
        key={item.id}
        item = {item}
        ></ReactAbout>)}
      </section>
    </div>
  );
}

export default App;
