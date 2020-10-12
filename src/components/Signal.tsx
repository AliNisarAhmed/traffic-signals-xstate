import React from 'react';

import styled from 'styled-components';
import { rgba } from 'polished';
import { StateValueMap } from 'xstate';
import {
	black,
	signalBodyBorderRadius,
	signalBodyWidth,
	signalLightRadius,
	signalNames,
	trafficColors,
} from '../utils/constants';
import { SectionTypes, SignalColor } from '../utils/types';

interface IProps {
	currentLight: StateValueMap;
	position: SectionTypes;
}

type SignalContainerProps = {
	position: SectionTypes;
}

const SignalContainer = styled.div<SignalContainerProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: ${signalBodyWidth}px;
	padding: 4px 2px;
	border-radius: ${signalBodyBorderRadius}px;
	background: ${rgba(black, 0.6)};
`;

interface IColorProps {
	bgColor: SignalColor;
	currentLight: StateValueMap;
	name: string;
}

const Color = styled.div<IColorProps>`
	width: ${signalLightRadius}px;
	height: ${signalLightRadius}px;
	border-radius: 100%;
	background-color: ${(props: IColorProps) =>
		props.currentLight[props.name] === undefined
			? props.bgColor === 'red' ? trafficColors[props.bgColor]: rgba(trafficColors[props.bgColor], 0.4)
			: props.bgColor === props.currentLight[props.name]
			? trafficColors[props.bgColor]
			: rgba(trafficColors[props.bgColor], 0.4)};
	border: 2px solid black;
	border-top: 4px solid black;
	margin-bottom: 1px;
`;

const Signal: React.FC<IProps> = ({ currentLight, position }) => {
	return (
		<SignalContainer position={position}>
			<Color bgColor="red" currentLight={currentLight} name={signalNames[position]} />
			<Color bgColor="yellow" currentLight={currentLight} name={signalNames[position]} />
			<Color bgColor="green" currentLight={currentLight} name={signalNames[position]} />
		</SignalContainer>
	);
};

export default Signal;
