import { Container } from '@material-ui/core';
import Header from './components/Header';
import Chemicals from './components/Chemicals';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

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

const palette = {
	primary: {
		main: '#DF1D00'
	},
};

const theme = createMuiTheme({
	palette,
});

function App() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.rootContainer}>
				<Header />

				<Container maxWidth="xl" className={classes.contentContainer}>
					<Chemicals />
				</Container>
			</div>
		</ThemeProvider>
	);
}

export default App;
