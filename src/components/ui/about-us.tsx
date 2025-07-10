import {
  Box, Container,
  Grid,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";

import MapIcon from '@mui/icons-material/Map';
import ExploreIcon from '@mui/icons-material/Explore';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { AboutCard } from "./about-card";

const About = styled('section')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  backgroundColor: theme.palette.grey[50],
}));

export const AboutUs = () => {
  return (
    <About id="about">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" component="h2" fontWeight="bold" color="primary.dark" mb={2}>
            Um Pouco Sobre Nós
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '42rem', mx: 'auto' }}>
            Somos apaixonados por viagens e dedicados a inspirar outros a explorar o mundo.
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470"
              alt="Nossa equipe de viajantes"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
          <Grid>
            <Typography variant="h4" component="h3" fontWeight="bold" color="primary.dark" mb={3}>
              Nossa Missão
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              A ViajeMais nasceu da paixão por descobrir novos lugares, culturas e experiências. Acreditamos que viajar não é apenas sobre destinos, mas sobre transformação pessoal e conexão com o mundo ao nosso redor.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
              Nosso portal oferece conteúdos inspiradores, guias práticos e histórias autênticas para ajudar você a planejar suas próximas aventuras com confiança e entusiasmo.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} >
          <Grid>
            <AboutCard title="Destinos Únicos" description="Descobrimos lugares extraordinários ao redor do mundo, desde paraísos tropicais até cidades históricas fascinantes." icon={<MapIcon />} iconColor="primary" />
          </Grid>

          <Grid>
            <AboutCard title="Aventuras Épicas" description="Compartilhamos experiências de aventura que desafiam limites e criam memórias inesquecíveis para toda a vida." icon={<ExploreIcon />} iconColor="success" />
          </Grid>

          <Grid>
            <AboutCard title="Cultura Autêntica" description="Mergulhamos profundamente nas tradições locais, gastronomia e costumes que tornam cada destino verdadeiramente especial." icon={<PhotoCameraIcon />} iconColor="warning" />
          </Grid>
        </Grid>
      </Container>
    </About>
  );
}