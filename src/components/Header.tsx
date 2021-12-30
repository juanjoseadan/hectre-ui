import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from '../assets/Hectre_Logo.svg'

const useStyles = makeStyles({
	appBar: {
		backgroundColor: '#fff',
		boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
		height: 64,
	},
	logo: {
		position: 'absolute',
		width: 100,
		height: 30.61,
		top: 'calc(50% - 30.61px/2 + 0.31px)',
		left: 30,
	}
});

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar className={classes.appBar} position="absolute">
			<img className={classes.logo} src={Logo} />
		</AppBar>
	);
};

export default Header;