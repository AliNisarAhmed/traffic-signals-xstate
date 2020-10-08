import React from 'react';
import styled from 'styled-components';
import Section from './Section';

interface IProps {

}

const ViewStyles = styled.main`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	width: 100%;
	height: 100%;
`

const View: React.FC<IProps> = (props) => {
	return (
		<ViewStyles>
			<Section position="NorthWest" />
			<Section position="NorthEast" />
			<Section position="SouthWest" />
			<Section position="SouthEast" />
		</ViewStyles>
	);
}

export default View;