import './App.css';
import Header from './components/Header/Header';
import ReactAbout from './components/ReactAbout/ReactAbout';
import Shop from './components/Shop/Shop';

const reactAbout = [
  {
    id: "q1",
    heading: 'How react works?',
    paragraph: 'Pragraph jkdklgf'
  },
  {
    id: "q2",
    heading: 'Difference between "props" and "state"',
    paragraph: 'Pragraph jkdklgf'
  },
  {
    id: "q3",
    heading: 'How use state works?',
    paragraph: 'Pragraph jkdklgf'
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
