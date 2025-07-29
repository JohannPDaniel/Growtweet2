import { Typography, type SxProps } from '@mui/material';

interface TitleProps {
	variant:
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'body1'
		| 'body2'
		| 'caption'
		| 'subtitle1'
		| 'subtitle2';
	sx?: SxProps;
	children?: React.ReactNode;
}

export const Title = ({ variant, sx, children }: TitleProps) => {
	return (
		<Typography
			sx={sx}
			variant={variant}>
			{children}
		</Typography>
	);
};
