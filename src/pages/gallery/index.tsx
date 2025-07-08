import { styled, alpha } from '@mui/material/styles'
import { Box, Container, Grid, Typography } from '@mui/material'
import { ImageCard } from '../../components/ui/image-card';
import { GalleryModal } from '../../components/ui/gallery-modal';
import { useState } from 'react';

const Hero = styled('section')(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.success.dark}, ${theme.palette.info.dark})`,
  color: theme.palette.common.white,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  maxWidth: '48rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  color: alpha(theme.palette.common.white, 0.85),
}));

export function Gallery() {
  // test only
  const galleryImages = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1502602898657-3e91760c0341?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Torre Eiffel iluminada à noite em Paris',
      title: 'Noite em Paris',
      location: 'Paris, França',
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Rua movimentada em Tóquio com letreiros de neon',
      title: 'Luzes de Tóquio',
      location: 'Tóquio, Japão',
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Montanhas nevadas sob um céu estrelado',
      title: 'Alpes Suíços',
      location: 'Zermatt, Suíça',
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Praia de areia branca com um mar azul-turquesa',
      title: 'Paraíso em Maldivas',
      location: 'Maldivas',
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Antigas ruínas de Machu Picchu no topo de uma montanha',
      title: 'Machu Picchu',
      location: 'Cusco, Peru',
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      alt: 'Canais de Veneza com uma gôndola passando',
      title: 'Canais de Veneza',
      location: 'Veneza, Itália',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(-1);
  const selectedImage = currentIndex > -1 ? galleryImages[currentIndex] : null;

  const openModal = (index: number) => {
    setCurrentIndex(index)
  }
  const closeModal = () => {
    setCurrentIndex(-1)
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  }

  return (
    <>
      <Hero>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              fontWeight={700}
              mb={3}
              sx={{ fontSize: { xs: '3rem', md: '3.75rem' } }}
            >
              📸 Galeria de Imagens
            </Typography>
            <Subtitle
              variant="h5"
              sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}
            >
              Uma coleção visual das mais belas paisagens e destinos ao redor do mundo
            </Subtitle>
          </Box>
        </Container>
      </Hero>

      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={3}>
          {galleryImages.map((image, index) => (
            <Grid key={image.id}>
              <ImageCard image={image} onAction={() => openModal(index)} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <GalleryModal 
        image={selectedImage}
        nextImage={nextImage} 
        prevImage={prevImage} 
        closeModal={closeModal} 
      />
    </>
  );
}