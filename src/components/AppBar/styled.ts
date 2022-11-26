import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

export const ContainerLogo = styled(Box)<BoxProps>(({ theme }) => ({
	flexGrow: 1,

	[theme.breakpoints.down('sm')]: {
		display: 'none',
	},
}));
