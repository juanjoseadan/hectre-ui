import { makeStyles } from '@material-ui/core/styles';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core';
import { Chemical } from '../models/chemical';

const useStyles = makeStyles({
	table: {

	},
	headerCell: {
		textTransform: 'uppercase',
		fontSize: 16,
		borderBottom: 'none',
		fontWeight: 700,
		paddingLeft: 100,
		backgroundColor: '#fff',
	},
	dataRow: {
		height: 58,
		left: 50,
		right: 50,
		'&:nth-of-type(odd)': {
			backgroundColor: '#f9f9f9',
		},
		'&:nth-of-type(even)': {
			backgroundColor: '#fff',
		},
	},
	dataCell: {
		borderBottom: 'none',
		fontWeight: 400,
		fontsize: 16,
		paddingLeft: 100,
	},
});

interface IChemicalsTableProps {
	rows: Chemical[],
}

const ChemicalsTable = (props: IChemicalsTableProps) => {
	const classes = useStyles();

	return (
		<TableContainer style={{ maxHeight: (window.innerHeight - 64 - 32 - 61 - 101), overflowY: 'scroll' }}>
			<Table stickyHeader className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell className={classes.headerCell}>Chemical type</TableCell>
						<TableCell className={classes.headerCell}>Active ingredient</TableCell>
						<TableCell className={classes.headerCell}>Name</TableCell>
						<TableCell className={classes.headerCell}>PHI (days)</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{
						props.rows.map((i, k) => (
							<TableRow key={k} className={classes.dataRow}>
								<TableCell className={classes.dataCell}>{i.chemicalType}</TableCell>
								<TableCell className={classes.dataCell}>{i.activeIngredient}</TableCell>
								<TableCell className={classes.dataCell}>{i.name}</TableCell>
								<TableCell className={classes.dataCell}>{i.preHarvestIntervalInDays}</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ChemicalsTable;