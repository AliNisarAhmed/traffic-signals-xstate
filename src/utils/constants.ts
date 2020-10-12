import { SectionTypes } from "./types";

export const darkColors = {
	green: '#99c140',
	red:  '#cc3232',
	yellow: '#e7b416'
}


export const trafficColors = {
	red: 'red',
	yellow: '#e7b416',
	green: '#4CBB17'
}

export const black = '#000000';

export const signalLightRadius = 10;
export const signalBodyWidth = signalLightRadius * 1.4;
export const signalBodyBorderRadius = signalLightRadius * 3 / 10;
export const signalPadding = signalLightRadius / 16;

export const redLightTime = 1000;
export const greenLightTime = 2500;
export const yellowLightTime = 1000;
export const totalSignalTime = redLightTime + greenLightTime + yellowLightTime;

export const sectionBorders = {
	'NorthWest': '0 10px 10px 0',
	'NorthEast': '0 0 10px 10px',
	'SouthWest': '10px 10px 0 0',
	'SouthEast': '10px 0 0 10px',
}

export const sectionGridTemplateColumns = {
	'NorthWest': '5fr 1fr',
	'NorthEast': '1fr 5fr',
	'SouthWest': '5fr 1fr',
	'SouthEast': '1fr 5fr',
}

export const sectionGridTemplateRows = {
	'NorthWest': '5fr 1fr',
	'NorthEast': '5fr 1fr',
	'SouthWest': '1fr 5fr',
	'SouthEast': '1fr 5fr',
}

export const mainRoadGridRows = {
	'NorthWest': '2 / -1',
	'NorthEast': '2 / -1',
	'SouthWest': '1 / 2',
	'SouthEast': '1 / 2',
}

export const sideRoadGridColumn = {
	'NorthWest': '2 / -1',
	'NorthEast': '1 / 2',
	'SouthWest': '2 / -1',
	'SouthEast': '1 / 2',
}

export const sideRoadGridRows = {
	'NorthWest': '1 / 2',
	'NorthEast': '1 / 2',
	'SouthWest': '2 / -1',
	'SouthEast': '2 / -1',
}

export const offRoadGridColumn = {
	'NorthWest': '1 / 2',
	'NorthEast': '2 / -1',
	'SouthWest': '1 / 2',
	'SouthEast': '2 / -1',
}

export const offRoadGridRows = {
	'NorthWest': '1 / 2',
	'NorthEast': '1 / 2',
	'SouthWest': '2 / -1',
	'SouthEast': '2 / -1',
}

export const signalNames = {
	'NorthWest': 'signal-0',
	'NorthEast': 'signal-1',
	'SouthWest': 'signal-2',
	'SouthEast': 'signal-3',
}

export const signalJustify = {
	'NorthWest': 'flex-end',
	'NorthEast': 'flex-start',
	'SouthWest': 'flex-end',
	'SouthEast': 'flex-start',
}

export const signalAlign = {
	'NorthWest': 'flex-end',
	'NorthEast': 'flex-end',
	'SouthWest': 'flex-start',
	'SouthEast': 'flex-start',
}