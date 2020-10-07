import { useMachine } from '@xstate/react';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Machine, StateValueMap } from 'xstate';
import { greenLightTime, redLightTime, yellowLightTime, totalSignalTime } from '../utils/constants';
import Signal from './Signal';

interface IProps {}

const ContainerStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	width: 500px;
`;

const signalStates = {
	green: {
		after: {
			[greenLightTime]: 'yellow',
		},
	},
	yellow: {
		after: {
			[yellowLightTime]: 'red',
		},
	},
	red: {
		after: {
			[redLightTime]: 'green'
		}
	},
};

const signalMachine = Machine({
	id: 'signal',
	initial: 'signal-0',
	states: {
		'signal-0': {
			after: {
				[totalSignalTime]: 'signal-1',
			},
			initial: 'red',
			states: {...signalStates},
			exit: 'red',
		},
		'signal-1': {
			after: {
				[totalSignalTime]: 'signal-2',
			},
			initial: 'red',
			states: {...signalStates},
			exit: 'red',
		},
		'signal-2': {
			after: {
				[totalSignalTime]: 'signal-3',
			},
			initial: 'red',
			states: {...signalStates},
			exit: 'red',
		},
		'signal-3': {
			after: {
				[totalSignalTime]: 'signal-0',
			},
			initial: 'red',
			states: {...signalStates},
			exit: 'red',
		},
	},
});

const FourSignals: React.FC<IProps> = (props) => {
	const [state, send] = useMachine(signalMachine);

	useEffect(() => {
		send('CHANGE');
	}, [send]);

	console.log('state.value :>> ', state.value);

	return (
		<ContainerStyles>
			<Signal name="signal-0" currentLight={state.value as StateValueMap} />
			<Signal name="signal-1" currentLight={state.value as StateValueMap} />
			<Signal name="signal-2" currentLight={state.value as StateValueMap} />
			<Signal name="signal-3" currentLight={state.value as StateValueMap} />
		</ContainerStyles>
	);
};

export default FourSignals;
