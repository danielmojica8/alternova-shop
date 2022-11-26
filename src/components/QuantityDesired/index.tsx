import { Stack, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export function QuantityDesired({
	setOpen,
	stock,
	quantity,
	setQuantity,
}: any) {
	return (
		<Stack spacing={2} direction="row" alignItems="center">
			<IconButton
				onClick={() => {
					setQuantity((prev: number) => {
						return prev === 0 ? prev : prev - 1;
					});
				}}
			>
				<RemoveIcon />
			</IconButton>
			<Typography>{quantity}</Typography>
			<IconButton
				onClick={() => {
					setQuantity((prev: number) => {
						if (prev + 1 > stock) {
							setOpen(true);
							return prev;
						}

						return prev + 1;
					});
				}}
			>
				<AddIcon />
			</IconButton>
		</Stack>
	);
}
