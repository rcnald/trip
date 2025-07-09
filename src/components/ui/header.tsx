import { AppBar, Box, Button, Container, Stack, styled } from "@mui/material"
import { Logo } from "./logo"
import { Link } from "./link"

const StyledHeader = styled(AppBar)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  paddingBlock: theme.spacing(2),

  backdropFilter: 'blur(4px)',
  WebkitBackdropFilter: 'blur(4px)',
  boxShadow: theme.shadows[1],
  zIndex: 50,
  borderBottom: `1px solid ${theme.palette.primary.light}`,
}))

export const Header = () => {
  return (
    <StyledHeader position="fixed">
        <Container sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }} maxWidth="lg">
          <Logo />

          <Box component='nav' sx={{ display: 'flex' }}>
            <Stack component="ul" style={{ alignItems: "center" }} spacing={2} direction="row">
              <li><Link to={'/'}>Inicio</Link></li>
              <li><Link to={'/gallery'}>Galeria</Link></li>
              <li><Link to={'/'}>Sobre</Link></li>
              <li><Link to={'/contact'}>Contato</Link></li>
            </Stack>
          </Box>
          <Button component={Link} to={'/blog'} variant="contained">Acesse o blog</Button>
        </Container>
      </StyledHeader>
  )
}