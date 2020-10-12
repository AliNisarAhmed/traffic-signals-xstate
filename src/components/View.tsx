import React, { useEffect } from 'react';
import styled from 'styled-components';
import Section from './Section';
import { Machine } from 'xstate';
import {
	greenLightTime,
	redLightTime,
	yellowLightTime,
	totalSignalTime,
} from '../utils/constants';
import { useMachine } from '@xstate/react';

interface IProps {}

const ViewStyles = styled.main`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	width: 100%;
	height: 100%;
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
			[redLightTime]: 'green',
		},
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
			states: { ...signalStates },
			exit: 'red',
		},
		'signal-1': {
			after: {
				[totalSignalTime]: 'signal-2',
			},
			initial: 'red',
			states: { ...signalStates },
			exit: 'red',
		},
		'signal-2': {
			after: {
				[totalSignalTime]: 'signal-3',
			},
			initial: 'red',
			states: { ...signalStates },
			exit: 'red',
		},
		'signal-3': {
			after: {
				[totalSignalTime]: 'signal-0',
			},
			initial: 'red',
			states: { ...signalStates },
			exit: 'red',
		},
	},
});

const View: React.FC<IProps> = (props) => {
	const [state, send] = useMachine(signalMachine);

	useEffect(() => {
		send('CHANGE');
	}, [send]);

	return (
		<ViewStyles>
			<Section position="NorthWest" state={state}/>
			<Section position="NorthEast" state={state}/>
			<Section position="SouthWest" state={state}/>
			<Section position="SouthEast" state={state}/>
		</ViewStyles>
	);
};

export default View;
