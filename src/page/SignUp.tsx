import { Box, Button, Grid } from '@mui/material';
import { BoxInputField } from '../components/SignIn/BoxInputField';
import { Title } from '../components/Title';
import { signInStyles } from '../config/styles/SignIn.styles';

const infoInputs = [
	{
		children: 'Nome',
		htmlFor: 'name',
		id: 'name',
		name: 'name',
		type: 'text',
	},
	{
		children: 'Username',
		htmlFor: 'username',
		id: 'username',
		name: 'username',
		type: 'text',
	},
	{
		children: 'E-mail',
		htmlFor: 'email',
		id: 'email',
		name: 'email',
		type: 'email',
	},
	{
		children: 'Senha',
		htmlFor: 'password',
		id: 'password',
		name: 'password',
		type: 'text',
	},
];

export const SignUp = () => {
	return (
		<Grid sx={signInStyles.body}>
			<Grid
				sx={{
					width: '100%',
					maxWidth: 500,
					height: 'auto',
					minHeight: 700,
					border: '1px solid black',
					py: 3,
					px: 5.5,
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
				}}>
				<Title
					sx={{ textAlign: 'center' }}
					variant='h4'>
					Cadastre-se no Growtweet
				</Title>
				<Box
					component='form'
					sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					{infoInputs.map((input) => (
						<BoxInputField
							children={input.children}
							htmlFor={input.htmlFor}
							id={input.id}
							name={input.name}
							type={input.type}
						/>
					))}
					<Box sx={{ display: 'flex', gap: 2 }}>
						<Button
							color='warning'
							fullWidth
							type='reset'
							variant='contained'>
							Cancelar
						</Button>
						<Button
							variant='contained'
							color='success'
							type='submit'
							fullWidth>
							Criar conta
						</Button>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};
