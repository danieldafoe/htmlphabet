import { Link }  from 'react-router-dom';
import styles from './ElementLink.module.css';

function ElementLink({label}) {
  return (
    <Link className={styles.ElementLink} to={`elements/${label}`}
          aria-label={`Elements starting with ${label}`}>
      {label}
    </Link>
  );
}

export default ElementLink;