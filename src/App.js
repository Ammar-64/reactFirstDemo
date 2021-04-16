import Nav from './components/Nav'
import Person from './components/Person'

const headerObj ={
  home: "Home",
  about: "About",
  contact: "Contact",
  faqs: "FAQs"
}

const footerObj ={
  home: "instagram",
  about: "facebook",
  contact: "twitter",
  faqs: "youtube"
}
const people = [
  {firstName:"Ammar", age: 27},
  {firstName:"Motaz", age: 25},
  {firstName:"AboBakr", age: 23},
  {firstName:"Amna", age: 24},
  {firstName:"Ali", age: 32},
  {firstName:"Bahaa", age: 23},
  {firstName:"Raneen", age: 34},
]

const arr = [headerObj, footerObj, footerObj, headerObj]

function App() {
  return (
    <div>
      {people.map(person => <Person {...person}/>)}
    </div>
  );
}

export default App;
