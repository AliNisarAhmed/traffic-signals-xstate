import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import {
	black,
	mainRoadGridRows,
	offRoadGridColumn,
	offRoadGridRows,
	sectionGridTemplateColumns,
	sectionGridTemplateRows,
	sideRoadGridColumn,
} from '../utils/constants';
import { SectionProps, SectionTypes } from '../utils/types';

interface IProps {
	position: SectionTypes;
}

const StyledSection = styled.section<SectionProps>`
	border: 1px solid pink;

	display: grid;
	grid-template-columns: ${(props) =>
		sectionGridTemplateColumns[props.position]};
	grid-template-rows: ${(props) => sectionGridTemplateRows[props.position]};
`;

const OffRoad = styled.div<SectionProps>`
	grid-column: ${(props) => offRoadGridColumn[props.position]};
	grid-row: ${(props) => offRoadGridRows[props.position]};
	background-color: ${rgba('green', 0.8)};
`;

const MainRoad = styled.div<SectionProps>`
	grid-column: 2 / -1;
	grid-row: ${(props) => mainRoadGridRows[props.position]};
	background-color: ${rgba(black, 0.8)};
`;

const SideRoad = styled.div<SectionProps>`
	grid-column: ${(props) => sideRoadGridColumn[props.position]};
	grid-row: 2 / -1;
	background-color: ${rgba(black, 0.8)};
`;

const Section: React.FC<IProps> = ({ position }) => {
	return (
		<StyledSection position={position}>
			<OffRoad position={position} />
			<MainRoad position={position} />
			<SideRoad position={position} />
		</StyledSection>
	);
};

export default Section;