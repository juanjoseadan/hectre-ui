import { makeStyles } from '@material-ui/core/styles';
import ChemicalsTable from './ChemicalsTable';
import AddIcon from '@mui/icons-material/Add';
import ChemicalsTablePagination from './ChemicalsTablePagination';
import { useDispatch, useSelector } from 'react-redux';

import {
	Button,
	Container,
} from '@material-ui/core';
import { RootState } from '../redux/rootReducer';
import { useEffect } from 'react';
import { getChemicals } from '../redux/actions/chemicalsActions';

const useStyles = makeStyles({
	container: {
		position: 'relative',
		overflowY: 'hidden',
		backgroundColor: '#fff',
		height: (window.innerHeight - 64 - 32),
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		paddingLeft: 0,
		paddingRight: 0,
		borderBottom: '2px solid #df1d00',
	},
		title: {
			display: 'flex',
			flex: 1,
			alignItems: 'center',
		},
			titleText: {
				fontSize: 20,
				fontWeight: 600,
				textTransform: 'uppercase',
				color: '#333',
			},
			titleInfo: {
				fontSize: 16,
				weight: 400,
				color: '#828282',
				paddingLeft: 16,
			},
	addChemicalsButton: {
		display: 'flex',
		textTransform: 'none',
		fontSize: 16,
		color: '#DF1D00',
		fontWeight: 700,
	},
	tableContainer: {
		display: 'flex',
		flexDirection: 'column',
		padding: 0,
		height: (window.innerHeight - 64 - 32),
	},
});

const useFetching = (limit: number, offset: number) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getChemicals(limit, offset));
	}, [dispatch]);
	return <></>;
};

const Chemicals = () => {
	const classes = useStyles();
	const chemicals = useSelector((state: RootState) => state.chemicals.chemicals);
	const total = useSelector((state: RootState) => state.chemicals.total);

	// Get the initial page...
	useFetching(10, 0);
	
	useEffect(() => {
	}, [total, chemicals]);

	return (
		<Container maxWidth="xl" className={classes.container}>
			<Container maxWidth="xl" className={classes.titleContainer}>
				<p className={classes.title}>
					<span className={classes.titleText}>Chemicals</span>
					<span className={classes.titleInfo}>There are {total} chemicals in total</span>
				</p>

				<Button
					className={classes.addChemicalsButton}
					startIcon={<AddIcon />}
				>
					Add new chemicals
				</Button>
			</Container>

			<Container maxWidth="xl" className={classes.tableContainer}>
				<ChemicalsTable rows={chemicals} />

				<ChemicalsTablePagination />
			</Container>
		</Container>
	);
};

export default Chemicals;