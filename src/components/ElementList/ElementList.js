import MainLayout from "../MainLayout/MainLayout";
import { ALL_ELEMENTS } from '../../App';
import { Link, useLoaderData } from "react-router-dom";
import styles from './ElementList.module.css';

let letter;

export async function loader({ params }) {
  letter = params.elementId;

  const elementsByLetter = ALL_ELEMENTS.filter(
    element => element[0] === params.elementId
  );
  return { elementsByLetter };
}

function ElementList() {
  let matchingElements;
  const { elementsByLetter } = useLoaderData();

  if (elementsByLetter.length > 0) {
    matchingElements = elementsByLetter.map((element) => (
      <li key={element}>
        <Link to={`/element/${element}`}>
          &lt;{element}&gt;
        </Link>
      </li>
    ));
  }
  else {
    matchingElements = <p>No matching elements for this letter.</p>
  }

  return (
    <MainLayout>
      <div className={styles.ElementList}>
        <h2>
          Elements starting with {letter.toUpperCase()}
        </h2>
        <nav>
          <ul>
            {matchingElements}
          </ul>
        </nav>
      </div>
    </MainLayout>
  );
}

export default ElementList;