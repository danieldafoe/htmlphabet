import { useLoaderData } from 'react-router-dom';
import * as Elements from '../../content/index';
import styles from './Element.module.css';
import MainLayout from '../MainLayout/MainLayout';

export async function loader({ params }) {
  const tagName = params.elementName;
  return { tagName };
}

function Element() {
  const { tagName } = useLoaderData();
  const ElementToRender = Elements[tagName];

  return (
    <MainLayout>
      <article className={styles.Element}>
        <ElementToRender></ElementToRender>
      </article>
    </MainLayout>
  )
}

export default Element;