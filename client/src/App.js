import React from "react";
import PostsList from "./componets/PostsList";

import {
  AppBar,
  Container,
  CssBaseline,
  IconButton,
  Toolbar,
  makeStyles,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PenIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Container: {
    marginTop: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.container}
              color="inherit"
            />
            <Typography
              variant="h6"
              color="secondary"
              className={classes.title}
            >
              <a href="https://localhost:3000/posts">Blogify</a>
            </Typography>
            <Button color="primary" variant="outlined" startIcon={<PenIcon />}>
              Yeni Yazı
            </Button>
          </Toolbar>
        </AppBar>

        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Router>
              <Routes>
                <Route path="/posts" element={<PostsList />} />
                <Route path="/posts" element={<PostsList />} />

                {/* <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="users" element={<Users />} />
                <Route path="user/:id" element={<User />} />
                <Route path="*" element={<Error404 />} />
              </Route> */}
                <Route path="/" element={<Navigate replace to="/posts" />} />
              </Routes>
            </Router>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
