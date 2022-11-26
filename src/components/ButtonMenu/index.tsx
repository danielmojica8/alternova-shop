import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export function ButtonMenu() {
	return (
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			<MenuIcon />
		</IconButton>
	);
}
