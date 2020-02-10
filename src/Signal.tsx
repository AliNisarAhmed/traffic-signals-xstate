import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { Machine, StateValue } from 'xstate';
import { useMachine } from '@xstate/react';

interface IProps {}

const SignalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

interface IColorProps {
	bgColor: SignalColor;
	current: StateValue;
}

const Color = styled.div<IColorProps>`
	width: 100px;
	height: 100px;
	border-radius: 100%;
	opacity: ${(props: IColorProps) =>
		props.bgColor === props.current ? 1 : 0.2};
	background-color: ${(props: IColorProps) => lighten(0.12, props.bgColor)};
`;

const signalMachine = Machine({
	id: 'signal',
	initial: 'green',
	states: {
		green: {
			after: {
				3000: 'yellow'
			}
		},
		red: {
			after: {
				3000: 'green'
			}
		},
		yellow: {
			after: {
				1000: 'red'
			}
		}
	}
});

type SignalColor = 'green' | 'red' | 'yellow';

const Signal: React.FC<IProps> = props => {
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
