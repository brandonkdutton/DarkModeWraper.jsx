import React, { useState } from 'react';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Paper from '@material-ui/core/Paper';
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
            minHeight: '100%',
            minWidth: '100%',
            position: 'absolute',
            backgroundColor: theme.palette.background.default,
        },
    });

    const classes = useStyles();

    return (
        <>
            <ThemeProvider theme={theme}>
                <Paper square className={classes.backPaperStyle}>
                    {props.children}
                    <button onClick={() => setDarkMode(!darkMode)}>Toggle dark mode</button>
                </Paper>
            </ThemeProvider>
        </>
    );
}

export default DarkModeWrapper;