export type Chemical = {
	_id: string;
	chemicalType: string;
	preHarvestIntervalInDays: string;
	activeIngredient: string;
	name: string;
	creationDate: Date;
	modificationDate: Date | null;
	deletionDate: Date | null;
};

export type ChemicalRequest = {
	chemicalType: string;
	activeIngredient: string;
	name: string;
	preHarvestInterval: string;
};