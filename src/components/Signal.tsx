import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { rgba } from 'polished';
import { Machine, StateValue } from 'xstate';
import { useMachine } from '@xstate/react';
import { black, trafficColors } from '../utils/constants';

interface IProps {}

const SignalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid black;
	width: 120px;
	height: 270px;
	padding: 5px 0;
	justify-content: space-between;
	border-radius: 10px;
	background: ${rgba(black, 0.6)};
`;

interface IColorProps {
	bgColor: SignalColor;
	current: StateValue;
}

const Color = styled.div<IColorProps>`
	width: 80px;
	height: 80px;
	border-radius: 100%;
	background-color: ${(props: IColorProps) =>
		props.bgColor === props.current
			? trafficColors[props.bgColor]
			: rgba(trafficColors[props.bgColor], 0.4)};
	border: 3px solid black;
	border-top: 6px solid black;
`;

const signalMachine = Machine({
	id: 'signal',
	initial: 'green',
	states: {
		green: {
			after: {
				3000: 'yellow',
			},
		},
		red: {
			after: {
				3000: 'green',
			},
		},
		yellow: {
			after: {
				1000: 'red',
			},
		},
	},
});

type SignalColor = 'green' | 'red' | 'yellow';

const Signal: React.FC<IProps> = (props) => {
	const [current, send, service] = useMachine(signalMachine);

	useEffect(() => {
		send('CHANGE');
	}, [send]);

	return (
		<SignalContainer>
			<Color bgColor="red" current={current.value} />
			<Color bgColor="yellow" current={current.value} />
			<Color bgColor="green" current={current.value} />
		</SignalContainer>
	);
};

export default Signal;
