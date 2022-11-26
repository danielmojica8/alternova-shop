import { Search, SearchIconWrapper, StyledInputBase } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import useProductsStore from '../../stores/ProductsStore';
import { Props } from './interfaces';

export function SearchProducts({ placeholder }: Props) {
	const { setSearchText } = useProductsStore();

	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				onChange={(e) => setSearchText(e.target.value)}
				placeholder={placeholder}
				inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	);
}

SearchProducts.defaultProps = {
	placeholder: 'Search Products...',
};
