import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouteLink } from "react-router-dom";

export function Nav_poke() {
  return (
    <>
      <AppBar position="static" sx={{ mb: "45px" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Box>
              <Typography variant="h5" color="black">
                PokeDex
              </Typography>
            </Box>
            <Box
              margin={"0px 0px 0px auto"}
              width={"25%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Link
                component={RouteLink}
                to={"/"}
                variant="h6"
                color="#fff"
                underline="none"
              >
                Home
              </Link>
              <Link
                component={RouteLink}
                to={"/favorites"}
                variant="h6"
                color="#fff"
                underline="none"
              >
                Favoritos
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Nav_poke;
