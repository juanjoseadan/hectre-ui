import { Container } from '@material-ui/core';
import Header from './components/Header';
import Chemicals from './components/Chemicals';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	rootContainer: {
		width: '100%',
		maxWidth: '100%',
		height: window.innerHeight - 64,
		maxHeight: '100%',
		backgroundColor: '#f8f8f8',
	},
	contentContainer: {
		marginTop: 64,
		padding: 16,
	},
});

function App() {
	const classes = useStyles();

	return (
		<div className={classes.rootContainer}>
			<Header />

			<Container maxWidth="xl" className={classes.contentContainer}>
				<Chemicals />
			</Container>
		</div>
	);
}

export default App;
