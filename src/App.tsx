import { Container } from '@mui/material';
import { AppBarHeader } from './components/AppBar';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { PropsApp } from './models';
import { ScrollTop } from './components/ScrollTop';
import { DrawerCart } from './components/DrawerCart';
import { ListProducts } from './components/ListProducts';
import { BoxStyled, ToolbarStyled } from './styled-components';
import { CategoryChips } from './components/CategoryChips';
import { DialogJSON } from './components/DialogJSON';

function App(props: PropsApp) {
	return (
		<>
			<AppBarHeader />
			<DrawerCart />
			<DialogJSON />

			<ToolbarStyled id="back-to-top-anchor" />

			<Container>
				<CategoryChips />
				<BoxStyled>
					<ListProducts />
				</BoxStyled>

				<ScrollTop {...props}>
					<Fab size="small" aria-label="scroll back to top">
						<KeyboardArrowUpIcon />
					</Fab>
				</ScrollTop>
			</Container>
		</>
	);
}

export default App;
