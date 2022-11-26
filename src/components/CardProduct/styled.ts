import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';

export const BoxContainer = styled(Box)<BoxProps>(({ theme }) => ({
	height: 'auto',
	minHeight: 380,
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '1rem',
	gap: '1rem',
}));

export const ContainerImage = styled(Box)<BoxProps>(({ theme }) => ({
	backgroundColor: '#f6f6f6',
	borderRadius: '5px',
	width: '100%',
	height: 90,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

export const ButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
	position: 'absolute',
	bottom: 0,
	borderRadius: 0,
}));
