import { Button, Container, Stack, styled, Typography } from "@mui/material"
import heroBg from '../../assets/hero.png';
import { Link } from "../../components/ui/link";
import { AboutUs } from "../../components/ui/about-us";

const Hero = styled('section')(({ theme }) => ({
  backgroundImage: `url(${heroBg})`,
  paddingBlock: theme.spacing(16),
  backgroundPosition: '20% 40%',
}))

export const CTAButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.warning.main}, ${theme.palette.error.main})`,
  color: theme.palette.common.white,
  fontWeight: "bold",
  padding: theme.spacing(1, 4),
  "&:hover": {
    background: `linear-gradient(to right, ${theme.palette.warning.dark}, ${theme.palette.error.dark})`,
  },
})) as typeof Button

export const Home = () => {
  return (
    <>
      <Hero>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 10,
        }} maxWidth="lg">
          <Typography variant="h1" fontSize={48} fontWeight={700} >Explore o mundo com a ViajeMais</Typography>
          <Typography variant="caption">
            Descubra destinos incríveis, viva aventuras inesquecíveis e mergulhe na diversidade cultural do nosso planeta
          </Typography>
          <Stack spacing={2} direction={{xs: "column", sm: "row"}} marginTop={4} >
            <CTAButton component={Link} to={'/gallery'} variant="contained" color="warning">📸 Ver Galeria</CTAButton>
            <Button component={Link} to={'/blog'} color="info" variant="outlined" sx={{ background: "white" }}>
              📖 Visite Nosso Blog
            </Button>
          </Stack>
        </Container>
      </Hero>
      <AboutUs/>
    </>
  )
}