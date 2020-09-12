import React, { useState } from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/styles/makeStyles';

function DarkModeWrapper(props) {
    const [darkMode, setDarkMode] = useState(true);

    const theme = createMuiTheme({
        palette: {
            type: (darkMode ? 'dark' : 'light'),
        }
    });

    const useStyles = makeStyles({
        backPaperStyle: {
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundColor: theme.palette.background.default,
        },
    });

    const classes = useStyles();

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Paper square className={classes.backPaperStyle}>
                    <div>{props.children}</div>
                    <button onClick={() => setDarkMode(!darkMode)}>Toggle dark mode</button>
                </Paper>
            </ThemeProvider>
        </>
    );
}

export default DarkModeWrapper;