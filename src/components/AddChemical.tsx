import { makeStyles } from '@material-ui/core/styles';

import {
	Dialog,
	Container,
	TextField,
	DialogActions,
	Button,
	DialogContent,
} from "@material-ui/core"
import { ChemicalRequest } from '../models/chemical';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createChemical } from '../redux/actions/chemicalsActions';
import HttpClient from '../HttpClient';

interface IAddChemicalProps {
	isOpen: boolean;
	onClose: (success: boolean) => void;
};

const useStyles = makeStyles({
	dialog: {
		width: '100%',
		height: 450,
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
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
	formContainer: {
		display: 'flex',
		flexDirection: 'column',
		padding: 0,
		marginTop: 8,
	},
	actionsContainer: {
		padding: 24,
	},
	input: {
		margin: '6px 0',
	},
	cancelButton: {
		color: '#000',
		fontWeight: 700,
		fontSize: 16,
		textTransform: 'none',
		marginLeft: 24,
	},
	submitButton: {
		backgroundColor: '#DF1D00',
		color: '#fff',
		fontWeight: 700,
		fontSize: 16,
		textTransform: 'none',
		marginLeft: 24,
	},
});

const emptyChemical: ChemicalRequest = {
	chemicalType: '',
	activeIngredient: '',
	name: '',
	preHarvestInterval: '',
};

const AddChemical = (props: IAddChemicalProps) => {
	const classes = useStyles();
	const [chemical, setChemical] = useState<ChemicalRequest>(emptyChemical);

	const handleCancel = () => {
		props.onClose(false);
	};

	const handleAccept = async () => {
		if (!isValid()) {
			return;
		}

		try {
			const url = `api/v1/chemicals`;
			
			await HttpClient.post(url, chemical);
			
			setChemical(emptyChemical);
			
			props.onClose(true);
		} catch (error) {
			console.error(error);
		}
	};

	const isValid = () => {
		if (chemical.chemicalType?.trim() === '') {
			return false;
		}

		if (chemical.activeIngredient?.trim() === '') {
			return false;
		}

		if (chemical.name?.trim() === '') {
			return false;
		}

		if (chemical.preHarvestInterval?.trim() === '') {
			return false;
		}

		return true;
	};

	return (
		<Dialog
			open={props.isOpen}
			onClose={props.onClose}
			PaperProps={{
				className: classes.dialog
			}}
		>
			<DialogContent className={classes.container}>
				<Container maxWidth="xl" className={classes.titleContainer}>
					<p className={classes.title}>
						<span className={classes.titleText}>Add new chemical</span>
					</p>
				</Container>

				<Container className={classes.formContainer}>
					<TextField
						label="Chemical Type"
						variant="standard"
						className={classes.input}
						value={chemical.chemicalType}
						onChange={event => setChemical({
							...chemical,
							chemicalType: event.target.value,
						})}
					/>

					<TextField
						label="Active Ingredient"
						variant="standard"
						className={classes.input}
						value={chemical.activeIngredient}
						onChange={event => setChemical({
							...chemical,
							activeIngredient: event.target.value,
						})}
					/>

					<TextField
						label="Name"
						variant="standard"
						className={classes.input}
						value={chemical.name}
						onChange={event => setChemical({
							...chemical,
							name: event.target.value,
						})}
					/>

					<TextField
						label="Pre Harvest Interval (in days)"
						variant="standard"
						className={classes.input}
						value={chemical.preHarvestInterval}
						onChange={event => setChemical({
							...chemical,
							preHarvestInterval: event.target.value,
						})}
					/>
				</Container>
			</DialogContent>

			<DialogActions className={classes.actionsContainer}>
				<Button
					className={classes.cancelButton}
					onClick={handleCancel}
				>
					Cancel
				</Button>

				<Button
					disableElevation
					className={classes.submitButton}
					onClick={handleAccept}
					variant="contained"
				>
					Accept
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default AddChemical;