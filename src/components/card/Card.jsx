import styles from './cardStyle.module.css';

const Card = ({ car, image, typeCar, children }) => {
	return (
		<div className={`${styles.card}  ${styles[car]}`}>
			<img
				className={styles.image}
				src={`/assets/images/${image}`}
				alt='sedans icon'
			/>
			<h2 className={styles.title}>{typeCar}</h2>
			<p className={styles.text}>{children}</p>
			<input className={styles.button} type='button' value='Learn more' />
		</div>
	);
};

export default Card;
