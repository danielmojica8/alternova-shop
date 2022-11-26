import { styled } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

export const ButtonCreateOrder = styled(Stack)<StackProps>(({ theme }) => ({
	padding: '.5rem',
	backgroundColor: theme.palette.secondary.main,
	color: '#fff',
	borderRadius: '4px',
	cursor: 'pointer',
	boxShadow: theme.shadows[1],
}));
