import { Search, SearchIconWrapper, StyledInputBase } from './styles';
import SearchIcon from '@mui/icons-material/Search';
import { Props } from './interfaces';

export function SearchProducts({ placeholder }: Props) {
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder={placeholder}
				inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	);
}

SearchProducts.defaultProps = {
	placeholder: 'Search Products...',
};
