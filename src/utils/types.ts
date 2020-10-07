export type SignalColor = 'green' | 'red' | 'yellow';

export type SectionTypes =
	| 'NorthWest'
	| 'SouthWest'
	| 'NorthEast'
	| 'SouthEast';

export type SectionProps = {
	position: SectionTypes;
};
