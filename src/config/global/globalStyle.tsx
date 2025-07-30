import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, GlobalStyles, type CSSObject } from '@mui/material';

const styles: Record<string, CSSObject> = {
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
		fontFamily: "'Karla', sans-serif",
	},

	a: {
		textDecoration: 'none',
	},
};

export function GlobalStyle() {
	return (
		<>
			<GlobalStyles styles={styles} />
			<CssBaseline />
		</>
	);
}
