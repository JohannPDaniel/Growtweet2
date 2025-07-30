import { Box, Button, Grid, Link } from '@mui/material';
import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BoxInputField } from '../components/SignIn/BoxInputField';
import { Title } from '../components/Title';
import { signInStyles } from '../config/styles/SignIn.styles';

export const SignIn = () => {
	useEffect(() => {
		document.title = 'Sign In - Growtweet';
	}, []);

	return (
		<Grid sx={signInStyles.body}>
			<Grid sx={signInStyles.folder}>
				<Grid sx={signInStyles.presentation}>
					<Title
						variant='h4'
						sx={{
							fontWeight: '600',
							fontSize: 30,
							letterSpacing: 2,
						}}>
						Growtwitter
					</Title>
					<Title variant='caption'>Trabalho final do bloco intermediário</Title>
					<Title variant='body2'>
						O Growtwitter é a plataforma definitiva para todos os apaixonados
						por redes sociais que buscam uma experiência familiar e poderosa,
						semelhante ao Twitter, mas com um toque único. Seja parte desta
						comunidade que valoriza a liberdade de expressão, a conexão com
						pessoas de todo o mundo e a disseminação de ideias.
					</Title>
				</Grid>
				<Grid sx={signInStyles.signIn}>
					<Title
						variant='h5'
						sx={{ color: '#000', fontWeight: '600', textAlign: 'center' }}>
						Entrar no Growtwitter
					</Title>

					<Box
						component='form'
						sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<BoxInputField
							htmlFor='username'
							id='username'
							name="username"
							type="text"
							children='Username'
						/>

						<BoxInputField
							htmlFor='password'
							id='password'
							name="password"
							type="text"
							children='Password'
						/>
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
						<Title
							sx={{ textAlign: 'center' }}
							variant='body1'>
							Não tem conta?{' '}
							<Link
								sx={{ textDecoration: 'none' }}
								component={RouterLink}
								to='/signUp'>
								Criar conta
							</Link>
						</Title>
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
};
