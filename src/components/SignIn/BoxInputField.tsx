import { Box, InputLabel, TextField } from '@mui/material';

interface BoxInputFieldProps {
	id: string;
	htmlFor: string;
	name: string;
    children: React.ReactNode;
    type: string
}

export const BoxInputField = ({
	id,
    htmlFor,
    name,
    type,
	children,
}: BoxInputFieldProps) => {
	return (
		<Box>
			<InputLabel
				htmlFor={htmlFor}
				sx={{ fontSize: 15 }}>
				{children}
			</InputLabel>
            <TextField
                type={type}
				id={id}
				sx={{
					'& .MuiOutlinedInput-root': {
						borderRadius: 2,
						height: 35,
					},
				}}
				size='small'
				name={name}
				fullWidth
			/>
		</Box>
	);
};
