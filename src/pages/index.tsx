import { Stream } from '@cloudflare/stream-react';
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MdMenu } from 'react-icons/md';

import styles from './index.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  stream: {
    borderRadius: '40px'
  }
}));
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <MdMenu />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Demo Video Stream
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <br />
      <Container maxWidth="sm">
        <Stream
          className={styles.stream_component}
          controls
          src={process.env.NEXT_PUBLIC_VIDEO_ID}
          responsive
        />
      </Container>
    </>
  );
}
