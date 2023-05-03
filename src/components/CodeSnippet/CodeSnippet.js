import styles from './CodeSnippet.module.css';

function CodeSnippet({children}) {
  return (
    <pre>
      <code className={styles.CodeSnippet}>
          {children}
      </code>
    </pre>
  );
}

export default CodeSnippet;