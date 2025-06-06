import Card from './components/card/Card';

const App = () => {
	return (
		<>
			<h1>Curso de React</h1>
			<div className='contCard'>
				<Card car='card--sedans' image='icon-sedans.svg' typeCar='SEDANS'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
					sapiente quo saepe illum est commodi rem iure optio, architecto
					doloribus at dolore incidunt? Ex a asperiores dignissimos deserunt
					quam atque!
				</Card>
				<Card car='card--suvs' image='icon-suvs.svg' typeCar='SUVS'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima culpa
					rem odit totam, soluta quis quos vitae expedita delectus temporibus
					aspernatur ea sint modi deleniti. Rem illum laborum explicabo
					voluptatibus.
				</Card>
				<Card car='card--luxury' image='icon-luxury.svg' typeCar='LUXURY'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima culpa
					rem odit totam, soluta quis quos vitae expedita delectus temporibus
					aspernatur ea sint modi deleniti. Rem illum laborum explicabo
					voluptatibus.
				</Card>
			</div>
		</>
	);
};

export default App;
