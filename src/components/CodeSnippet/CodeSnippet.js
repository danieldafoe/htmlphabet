import styles from './CodeSnippet.module.css';

function CodeSnippet({labelId, children}) {
  return (
    <pre>
      <code className={styles.CodeSnippet}
      tabIndex='0'
      aria-labelledby={labelId || undefined}>
        {children}
      </code>
    </pre>
  );
}

export default CodeSnippet;