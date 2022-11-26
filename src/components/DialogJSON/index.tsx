import { Box, Dialog } from '@mui/material';
import useDialogJSONStore from '../../stores/DialogJSONStore';

export function DialogJSON() {
	const { open, json, setOpen } = useDialogJSONStore();

	return (
		<Dialog onClose={setOpen} open={open}>
			<Box padding="1rem">{JSON.stringify(json, undefined, 2)}</Box>
		</Dialog>
	);
}
