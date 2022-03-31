import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Footer() {
    return (
      <footer>
        <Box
          px={{ xs: 3, sm: 10 }}
          py={{ xs: 3 }}
          bgcolor="primary.main"
          color="white"
        >
          <Container maxWidth="lg">
          <Link href="mailto:jay.j.lee.1@gmail.com" color="inherit">
                    Contact
                  </Link>
            <Box textAlign="center" pt={{ xs: 2, sm: 3 }} pb={{ xs: 2, sm: 3 }}>
              BO(U)LDER© and BO(U)LDERBETA© 2022
            </Box>
          </Container>
        </Box>
      </footer>
    );
  }

  export default Footer