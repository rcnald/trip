import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import ExploreIcon from "@mui/icons-material/Explore";
import { Link } from "react-router-dom";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  padding: theme.spacing(8, 0),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 0.7),
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.common.white,
    textDecoration: 'underline',
  },
}));

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid >
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <ExploreIcon sx={(theme) => ({ fontSize: "2.5rem", color: theme.palette.primary.main })} />
                <Typography variant="h5" component="span" fontWeight="bold">
                  ViajeMais
                </Typography>
              </Stack>
              <Typography variant="body2" sx={(theme) => ({ color: alpha(theme.palette.common.white, 0.7) })}>
                Inspirando viajantes a explorar o mundo com confiança e
                curiosidade.
              </Typography>
            </Stack>
          </Grid>

          <Grid>
            <Stack spacing={1.5}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Recursos
              </Typography>
              <FooterLink to="#">Guias de Viagem</FooterLink>
              <FooterLink to="#">Dicas de Segurança</FooterLink>
              <FooterLink to="#">Orçamento</FooterLink>
              <FooterLink to="/blog" sx={(theme)=>({ fontWeight: 'bold', color: theme.palette.warning.light })}>
                📖 Blog Principal
              </FooterLink>
            </Stack>
          </Grid>

          <Grid >
            <Stack spacing={1.5}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Contato
              </Typography>
              <Typography variant="body2" sx={(theme) => ({ color: alpha(theme.palette.common.white, 0.7) })}>
                contato@viajemais.com
              </Typography>
              <Typography variant="body2" sx={(theme) => ({ color: alpha(theme.palette.common.white, 0.7) })}>
                +55 (11) 9999-9999
              </Typography>
              <Typography variant="body2" sx={(theme) => ({ color: alpha(theme.palette.common.white, 0.7) })}>
                São Paulo, Brasil
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={(theme) => ({
            mt: 6,
            pt: 4,
            borderTop: 1,
            borderColor: alpha(theme.palette.common.white, 0.1),
            textAlign: 'center',
          })}
        >
          <Typography variant="body2" sx={(theme) => ({ color: alpha(theme.palette.common.white, 0.7) })}>
            &copy; {currentYear} ViajeMais. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
}