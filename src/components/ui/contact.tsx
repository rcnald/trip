import { Alert, Box, Button, Card, CardContent, CardHeader, CircularProgress, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { useContactForm } from "../../hooks/use-contact-form";

import SendIcon from "@mui/icons-material/Send"

export const Contact = () => {
  const { errors, formData, handleInputChange, handleSubmit, isSubmitting, submitStatus } = useContactForm()

  const feedback = {
    success: "Mensagem enviada com sucesso!",
    error: "Ocorreu um erro ao enviar sua mensagem. ",
  }
  const feedbackMessage = submitStatus && feedback[submitStatus];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <Grid container>
        <Card sx={{ boxShadow: 3, width: '100%' }}>
          <CardHeader
            title={
              <Stack direction="row" spacing={1.5} alignItems="center">
                <SendIcon color="primary" />
                <Typography variant="h5" component="h2" fontWeight="bold">
                  Envie sua Mensagem
                </Typography>
              </Stack>
            }
            subheader="Preencha o formulário e entraremos em contato."
          />
          <CardContent>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Stack spacing={3}>
                {submitStatus ? (
                  <Alert severity={submitStatus}>
                    {feedbackMessage}
                  </Alert>
                ) : null}
                <TextField
                  fullWidth
                  id="nome"
                  name="nome"
                  label="Nome *"
                  value={formData.nome}
                  onChange={handleInputChange}
                  error={!!errors.nome}
                  helperText={errors.nome}
                  disabled={isSubmitting}
                />
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  label="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  disabled={isSubmitting}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  id="mensagem"
                  name="mensagem"
                  label="Mensagem *"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  error={!!errors.mensagem}
                  helperText={errors.mensagem}
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  startIcon={
                    isSubmitting ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      <SendIcon />
                    )
                  }
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  )
}