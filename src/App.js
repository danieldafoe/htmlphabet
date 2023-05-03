import './App.css';
import ElementLink from './components/ElementLink/ElementLink';
import MainLayout from './components/MainLayout/MainLayout';

export const ALL_ELEMENTS = [
  'a',
  'abbr',
  'address',
  'b',
  'blockquote',
  'date',
  'embed',
  'fieldset',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'header',
  'i',
  'iframe',
  'img',
  'input',
  'legend',
  'math',
  'p',
  'picture',
  'textarea',
  'svg'
];

function App() {
  // Use ALL_ELEMENTS and simply get the first letter of each
  // Add unique letters to an array, don't add duplicate ones
  const elementFirstLetters = ['a','b','c','d','e','f','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x'];
  const elementLinks = elementFirstLetters.map((element =>
    <li key={element}>
      <ElementLink label={element}></ElementLink>
    </li>
  ));

  return (
    <MainLayout>
      <p>
        Select a letter to view all non-deprecated HTML elements starting with that letter.
      </p>
      <nav>
        <ul>
          {elementLinks}
        </ul>
      </nav>
    </MainLayout>
  );
}

export default App;
