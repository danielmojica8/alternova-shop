import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';

export function DrawerCart() {
	const [open, setOpen] = useState(true);

	return (
		<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
			<Stack spacing={2} padding={2}>
				<Typography>Shopping Cart</Typography>
				{[1, 2, 3, 4, 5].map((item) => (
					<Paper elevation={1}>
						<Grid container columnSpacing={2} alignItems="center">
							<Grid item xs={1}>
								<Box width={300}>
									<img
										src="https://itechcolombia.co/wp-content/uploads/2022/05/iphone-13-pro-max-green-select.png"
										height="50"
									/>
								</Box>
							</Grid>
							<Grid item xs={4}>
								<Typography variant="body1" component="span">
									Iphone 13 Pro max pro
								</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography variant="body1" component="span">
									2
								</Typography>
							</Grid>
							<Grid item xs={2}>
								<Typography variant="body1" component="span">
									$5000
								</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography variant="body1" component="span">
									$10000
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				))}
			</Stack>
		</Drawer>
	);
}
