import { Box, Card, CardActionArea, CardMedia, styled, Typography } from "@mui/material";
import MapPin from '@mui/icons-material/Pin'

const StyledImageCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  transition: theme.transitions.create(['box-shadow', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[10],
  },
}))

const StyledImageCardMedia = styled(CardMedia)(({ theme }) => ({
  objectFit: 'cover',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),

  '.MuiCardActionArea-root:hover &': {
    transform: 'scale(1.1)',
  },
})) as typeof CardMedia

const GradientOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
  opacity: 0,

  transition: theme.transitions.create('opacity'),

  '.MuiCardActionArea-root:hover &': {
    opacity: 1,
  },
}));

const ContentOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  padding: theme.spacing(2),
  color: theme.palette.common.white,

  transform: 'translateY(100%)',
  transition: theme.transitions.create('transform'),
  '.MuiCardActionArea-root:hover &': {
    transform: 'translateY(0)',
  },
}))

export const ImageCard = ({ image, onAction }: { image: { src: string, alt: string, title: string, location: string }, onAction: () => void }) => {
  return (
    <StyledImageCard>
      <CardActionArea onClick={onAction}>
        <Box sx={{ position: 'relative', height: 256 }}>
          <StyledImageCardMedia
            component="img"
            image={image.src}
            alt={image.alt}
            sx={{ height: '100%', width: '100%' }}
          />
          <GradientOverlay />
          <ContentOverlay>
            <Typography variant="h6" component="h3" fontWeight={700} noWrap>
              {image.title}
            </Typography>
            <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', gap: theme.spacing(.5), color: theme.palette.grey[300] })}>
              <MapPin sx={{ fontSize: '1rem' }} />
              <Typography variant="body2">{image.location}</Typography>
            </Box>
          </ContentOverlay>
        </Box>
      </CardActionArea>
    </StyledImageCard>
  )
}