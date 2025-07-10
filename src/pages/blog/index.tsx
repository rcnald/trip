import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { useArticles } from "../../hooks/use-articles";
import ArticleCard from "../../components/ui/article-card";

const Hero = styled('section')(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.info.main}, ${theme.palette.success.main})`,
  color: theme.palette.common.white,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

const Subtitle = styled(Typography)(() => ({
  color: 'rgba(255, 255, 255, 0.85)',
  maxWidth: '48rem',
}));

export const Blog = () => {
  const { articles, loading, error } = useArticles();

  return (
    <>
      <Hero>
        <Container maxWidth="lg">
          <Box textAlign={'center'} sx={{ paddingTop: 20 }}>
            <Typography variant="h1" fontWeight={700} marginBottom={3} sx={{ fontSize: { xs: '3rem', md: '3.75rem' } }}>
              📖 Blog de Viagens
            </Typography>
            <Subtitle variant="h5" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, mx: 'auto' }}>
              Descubra histórias inspiradoras, dicas valiosas e experiências únicas de viajantes ao redor do mundo
            </Subtitle>
          </Box>
        </Container>
      </Hero>


      <section>
        <Container maxWidth="lg" sx={{ paddingY: 8 }}>
          {error ? (
            <Typography variant="h6" color="error">Erro ao carregar artigos</Typography>
          ) : (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
              {loading ? <Typography variant="h6" color="error">Carregando...</Typography> : null}
              {!loading && articles.map((article) => (
                <Grid size={1}>
                  <ArticleCard article={article}></ArticleCard>
                </Grid>
              ))}
            </Grid>
          )}

        </Container>
      </section>
    </>
  );
}