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
  sideRoadGridRows,
	signalAlign,
  signalJustify,
} from '../utils/constants';
import { SectionProps, SectionTypes } from '../utils/types';
import Signal from './Signal';

interface IProps {
  position: SectionTypes;
  state: any;
}

const StyledSection = styled.section<SectionProps>`
  border: 10px solid gray;

  display: grid;
  grid-template-columns: ${(props) => sectionGridTemplateColumns[props.position]};
  grid-template-rows: ${(props) => sectionGridTemplateRows[props.position]};
`;

const OffRoad = styled.div<SectionProps>`
  display: flex;
  justify-content: ${(props) => signalJustify[props.position]};
  align-items: ${(props) => signalAlign[props.position]};

  grid-column: ${(props) => offRoadGridColumn[props.position]};
  grid-row: ${(props) => offRoadGridRows[props.position]};
  background-color: ${rgba('green', 0.8)};
`;

const MainRoad = styled.div<SectionProps>`
  grid-column: 1 / -1;
  grid-row: ${(props) => mainRoadGridRows[props.position]};
  background-color: ${rgba(black, 0.8)};
`;

const SideRoad = styled.div<SectionProps>`
  grid-column: ${(props) => sideRoadGridColumn[props.position]};
  grid-row: ${(props) => sideRoadGridRows[props.position]};
  background-color: ${rgba(black, 0.8)};
`;

const Section: React.FC<IProps> = ({ position, state }) => {
  return (
    <StyledSection position={position}>
      <OffRoad position={position}>
        <Signal currentLight={state.value} position={position} />
      </OffRoad>
      <MainRoad position={position} />
      <SideRoad position={position} />
    </StyledSection>
  );
};

export default Section;
