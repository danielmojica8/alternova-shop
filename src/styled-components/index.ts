import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';

export const BoxStyled = styled(Box)<BoxProps>(() => ({
	padding: '1rem',
	maxWidth: '1600px',
	margin: '0 auto',
}));

export const ToolbarStyled = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
	minHeight: 0,
	marginTop: '5rem',

	[theme.breakpoints.up('xs')]: {
		minHeight: 0,
	},
}));
