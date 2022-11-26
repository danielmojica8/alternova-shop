import { Box, Fade, useScrollTrigger } from '@mui/material';
import { PropsApp } from '../../models';

export function ScrollTop(props: PropsApp) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
		const anchor = (
			(event.target as HTMLDivElement).ownerDocument || document
		).querySelector('#back-to-top-anchor');

		if (anchor) {
			anchor.scrollIntoView({
				block: 'center',
			});
		}
	};

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				role="productsPresentation"
				sx={{ position: 'fixed', bottom: 16, right: 16 }}
			>
				{children}
			</Box>
		</Fade>
	);
}
