import {
	Box,
	Button,
	Grid,
	InputLabel,
	TextField,
	Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { Title } from "../components/Title";

export const SignIn = () => {
	useEffect(() => {
		document.title = 'Sign In - Growtweet';
	}, []);

	return (
		<>
			<Grid
				sx={{
					width: '100%',
					height: '100vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#f2f2f2',
				}}>
				<Grid
					sx={{
						width: '100%',
						maxWidth: 1200,
						height: 320,
						display: 'flex',
					}}>
					<Grid
						sx={{
							width: '55%',
							height: '100%',
							backgroundColor: '#1d9bf0',
							borderRadius: '10px 0px 0px 10px',
							py: 10,
							px: 3,
							color: 'white',
							display: 'flex',
							flexDirection: 'column',
							gap: 1,
						}}>
						<Typography
							variant='h4'
							sx={{
								fontWeight: '600',
								fontSize: 30,
								letterSpacing: 2,
							}}>
							Growtwitter
						</Typography>
						<Typography variant='caption'>
							Trabalho final do bloco intermediário
						</Typography>
						<Typography variant='body2'>
							O Growtwitter é a plataforma definitiva para todos os apaixonados
							por redes sociais que buscam uma experiência familiar e poderosa,
							semelhante ao Twitter, mas com um toque único. Seja parte desta
							comunidade que valoriza a liberdade de expressão, a conexão com
							pessoas de todo o mundo e a disseminação de ideias.
						</Typography>
					</Grid>
					<Grid
						sx={{
							width: '45%',
							height: '100%',
							backgroundColor: 'white',
							borderRadius: '0px 10px 10px 0px',
							px: 10,
							py: 4,
							color: '#888',
						}}>
						<Title
							variant='h5'
							sx={{ color: '#000', fontWeight: '600', textAlign: 'center' }}>
							Entrar no Growtwitter
						</Title>

						<Box
							component='form'
							sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
							<Box>
								<InputLabel sx={{ fontSize: 15 }}>Username</InputLabel>
								<TextField
									sx={{
										'& .MuiOutlinedInput-root': {
											borderRadius: 2,
											height: 35,
										},
									}}
									size='small'
									fullWidth
								/>
							</Box>
							<Box>
								<InputLabel sx={{ fontSize: 15 }}>Password</InputLabel>
								<TextField
									sx={{
										'& .MuiOutlinedInput-root': {
											borderRadius: 2,
											height: 35,
										},
									}}
									size='small'
									fullWidth
								/>
							</Box>
							<Button
								variant='contained'
								fullWidth
								sx={{
									backgroundColor: '#1d9bf0',
									borderRadius: 2,
									height: 35,
								}}>
								Entrar
							</Button>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
