import { makeStyles } from '@material-ui/core/styles';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
	Button,
	Container, IconButton, MenuItem, Select,
} from "@material-ui/core";

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import React, { useEffect, useState } from 'react';
import { getChemicals } from '../redux/actions/chemicalsActions';

const useStyles = makeStyles({
	container: {
		display: 'flex',
		justifyContent: 'end',
		padding: 0,
		alignItems: 'center',
		position: 'absolute',
		zIndex: 100,
		bottom: 24,
		right: 24,
	},
	navButton: {
		border: '1px solid #E0E0E0',
		borderRadius: 4,
		width: 32,
		height: 32,
		minWidth: 32,
		margin: '0 4px',
	},
	navIcon: {
		border: 'none',
		borderRadius: 4,
		width: 32,
		height: 32,
		minWidth: 32,
		margin: '0 4px',
	},
	navButtonIcon: {
		width: 12,
		height: 12,
	},
	activePage: {
		border: '1px solid #DF1D00',
		color: '#DF1D00',
	},
	info: {
		fontSize: 16,
		weight: 400,
		color: '#bdbdbd',
		paddingLeft: 16,
		margin: '4px 16px',
	},
	select: {
		'&::before': {
			borderBottom: '2px solid #df1d00',
		}
	}
});

const ChemicalsTablePagination = () => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const total = useSelector((state: RootState) => state.chemicals.total);
	const availablePageSizes = [10, 15, 20, 30];

	const [pages, setPages] = useState(1);
	const [pageSize, setPageSize] = useState(availablePageSizes[0]);
	const [currentPage, setCurrentPage] = useState(1);


	useEffect(() => {
		const updateChemicals = () => {
			const offset = pageSize * (currentPage - 1);
			dispatch(getChemicals(pageSize, offset))
		};

		const _pages = Math.ceil(total / pageSize);
		
		setPages(_pages);
		updateChemicals();
	}, [total, pageSize, currentPage, setPages]);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const handleNextPage = () => {
		if (currentPage !== pages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handlePageSizeChange = (event: any) => {
		setPageSize(event.target.value);
	};

	return (
		<Container maxWidth="xl" className={classes.container}>
			<IconButton
				disabled={currentPage === 1}
				onClick={handlePreviousPage}
				className={classes.navButton}
			>
				<ArrowBackIosNewIcon className={classes.navButtonIcon} />
			</IconButton>

			{
				[...Array(pages)].map((i, k) => (
					<>
						{
							(k === (pages - 1) && pages > 1) ? 
								<IconButton disabled className={classes.navIcon}>
									<MoreHorizIcon />
								</IconButton> 
								:
								<></>
						}

						<Button
							key={k}
							onClick={() => handlePageChange(k + 1)}
							className={`${classes.navButton} ${(currentPage === (k +1) ? classes.activePage : undefined)}`}
						>
							{k + 1}
						</Button>
					</>
				))
			}

			<IconButton
				disabled={currentPage === pages}
				onClick={handleNextPage}
				className={classes.navButton}
			>
				<ArrowForwardIosIcon className={classes.navButtonIcon} />
			</IconButton>

			<span className={classes.info}>Show records</span>
			
			<Select
				value={pageSize}
				onChange={handlePageSizeChange}
				className={classes.select}
				IconComponent={KeyboardArrowDownIcon}
			>
				{availablePageSizes.map((i, k) => <MenuItem key={k} value={i}>{i} rows</MenuItem>)}
			</Select>
		</Container>
	);
};

export default ChemicalsTablePagination;