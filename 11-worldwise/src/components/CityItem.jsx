import styles from './CityItem.module.css';

const CityItem = ({ city }) => {
  console.log('city: ', city);

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{}</span>
    </li>
  )
}

export default CityItem