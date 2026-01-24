import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouteLink } from "react-router-dom";

export function Nav_poke() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar
        position="static"
        sx={{
          mb: { xs: "30px", md: "45px" },
          backgroundColor: "white",
          color: "black",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ px: { xs: 2, md: 4 } }}>
            <Link
              component={RouteLink}
              to={"/"}
              variant={isMobile ? "h6" : "h4"}
              color="#000"
              underline="none"
              fontWeight={"bold"}
              sx={{
                fontFamily: "'Roboto', sans-serif",
                transition: "transform 0.2s ease",
                color: "#000",
                "&:hover": {
                  transform: "scale(1.05)",
                  color: "#ff0000",
                },
              }}
            >
              PokeDex
            </Link>

            <Box
              marginLeft={"auto"}
              display="flex"
              justifyContent={"center"}
              alignItems="center"
              sx={{
                position: { xs: "absolute", md: "static" },
                right: { xs: isMobile ? 16 : "auto", md: "auto" },
              }}
            >
              <Link
                component={RouteLink}
                to={"/favorites"}
                variant="h6"
                underline="none"
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                  fontWeight:"bold",
                  transition: "all 0.3s ease",
                  padding: { xs: "8px 12px", sm: "10px 16px", md: "12px 20px" },
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "rgba(255, 0, 0, 0.1)",
                    color: "#ff0000",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                ❤️ Favoritos
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Nav_poke;
