import './App.css';
import ElementLink from './components/ElementLink/ElementLink';
import MainLayout from './components/MainLayout/MainLayout';

export const ALL_ELEMENTS = [
  { tag: 'a', disabled: false },
  { tag: 'abbr', disabled: false },
  { tag: 'address', disabled: true },
  { tag: 'b', disabled: true },
  { tag: 'blockquote', disabled: true },
  { tag: 'button', disabled: true },
  { tag: 'date', disabled: true },
  { tag: 'embed', disabled: true },
  { tag: 'fieldset', disabled: true },
  { tag: 'footer', disabled: true },
  { tag: 'form', disabled: true },
  { tag: 'h1', disabled: true },
  { tag: 'h2', disabled: true },
  { tag: 'h3', disabled: true },
  { tag: 'h4', disabled: true },
  { tag: 'h5', disabled: true },
  { tag: 'h6', disabled: true },
  { tag: 'header', disabled: true },
  { tag: 'i', disabled: true },
  { tag: 'iframe', disabled: true },
  { tag: 'img', disabled: true },
  { tag: 'input', disabled: true },
  { tag: 'legend', disabled: true },
  { tag: 'math', disabled: true },
  { tag: 'ol', disabled: true },
  { tag: 'p', disabled: true },
  { tag: 'picture', disabled: true },
  { tag: 'textarea', disabled: true },
  { tag: 'svg', disabled: true },
  { tag: 'ul', disabled: true },
  { tag: 'video', disabled: true }
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
