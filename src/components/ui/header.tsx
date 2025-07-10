import { AppBar, Box, Button, Container, Stack, styled } from "@mui/material"
import { Logo } from "./logo"
import { Link } from "./link"
import { Link as MUILink } from "@mui/material"

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

const StyledLink = styled(MUILink)(({ theme }) => ({
  color: theme.palette.grey[700],
  textDecoration: "none",
  cursor: "pointer",
  fontWeight: 500,
  fontSize: theme.typography.pxToRem(16),
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.short,
  }),

  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

export const Header = () => {
  return (
    <StyledHeader position="fixed">
      <Container sx={{
        display: 'flex',
        flexDirection: { sm: 'row', xs: 'column' },
        gap: 2,
        justifyContent: 'space-between',
      }} maxWidth="lg">
        <Logo />

        <Box component='nav' sx={{ display: 'flex' }}>
          <Stack component="ul" style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center" }} spacing={2} direction="row">
            <li><Link to={'/'}>Inicio</Link></li>
            <li><Link to={'/gallery'}>Galeria</Link></li>
            <li><StyledLink href="#about">Sobre</StyledLink></li>
            <li><StyledLink href="#contact">Contato</StyledLink></li>

          </Stack>
        </Box>
        <Button component={Link} to={'/blog'} variant="contained">Acesse o blog</Button>
      </Container>
    </StyledHeader>
  )
}