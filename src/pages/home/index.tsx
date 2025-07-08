import { Button, Container, Stack, styled, Typography } from "@mui/material"
import heroBg from '../../assets/hero.png';
import { Link } from "../../components/ui/link";

const Hero = styled('section')(({ theme }) => ({
  backgroundImage: `url(${heroBg})`,
  paddingBlock: theme.spacing(16),
  backgroundPosition: '20% 40%',
}))

export const Home = () => {
  return (
    <>
      <Hero>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }} maxWidth="lg">
          <Typography variant="h1" fontSize={48} fontWeight={700} >Explore o mundo com a ViajeMais</Typography>
          <Typography variant="caption">
            Descubra destinos incríveis, viva aventuras inesquecíveis e mergulhe na diversidade cultural do nosso planeta
          </Typography>
          <Stack spacing={2} direction={"row"} marginTop={4} >
            <Button variant="contained" color="warning">Ver galeria</Button>
            <Button component={Link} to={'/blog'} color="info" variant="outlined" sx={{ background: "white" }}>
              Leia nosso blog
            </Button>
          </Stack>
        </Container>
      </Hero>
    </>
  )
}