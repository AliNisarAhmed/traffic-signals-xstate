import React from 'react';

import styled from 'styled-components';
import { rgba } from 'polished';
import { StateValueMap } from 'xstate';
import {
	black,
	signalBodyBorderRadius,
	signalBodyWidth,
	signalLightRadius,
	trafficColors,
} from '../utils/constants';
import { SignalColor } from '../utils/types';

interface IProps {
	name: string;
	currentLight: StateValueMap;
}

const SignalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border: 1px solid black;
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
	border: 3px solid black;
	border-top: 5px solid black;
	margin-bottom: 1px;
`;

const Signal: React.FC<IProps> = ({ name, currentLight }) => {
	return (
		<SignalContainer>
			<Color bgColor="red" currentLight={currentLight} name={name} />
			<Color bgColor="yellow" currentLight={currentLight} name={name} />
			<Color bgColor="green" currentLight={currentLight} name={name} />
		</SignalContainer>
	);
};

export default Signal;
