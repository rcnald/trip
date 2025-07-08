import {
  Modal,
  Box,
  IconButton,
  Typography,
  Fade,
  Stack,
  Backdrop,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MapPinIcon from '@mui/icons-material/Pin';

const ModalContentWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '900px',
  maxHeight: '90vh',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[24],
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  color: 'white',
  backgroundColor: alpha(theme.palette.common.black, 0.4),
  backdropFilter: 'blur(4px)',

  transition: theme.transitions.create('background-color'),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.6),
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 2, // Acima do conteúdo
  color: 'white',
  backgroundColor: alpha(theme.palette.common.black, 0.4),
  backdropFilter: 'blur(4px)',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.6),
  },
}))

export const GalleryModal = ({
  image,
  closeModal,
  nextImage,
  prevImage,
}: {
  image: {
    id: string;
    src: string;
    alt: string;
    title: string;
    location: string;
  } | null,
  closeModal: () => void,
  nextImage: () => void,
  prevImage: () => void,
}) => {
  if (!image) return null;

  return (
    <Modal
      open={!!image}
      onClose={closeModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
        },
      }}
    >
      <Fade in={!!image}>
        <Box sx={{ outline: 'none' }} onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal}>
            <CloseIcon />
          </CloseButton>

          <NavButton
            onClick={prevImage}
            sx={(theme) => ({ left: theme.spacing(2) })}
          >
            <ArrowBackIosNewIcon />
          </NavButton>

          <NavButton
            onClick={nextImage}
            sx={(theme) => ({ right: theme.spacing(2) })}
          >
            <ArrowForwardIosIcon />
          </NavButton>

          <ModalContentWrapper>
            <Box
              component="img"
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '60vh',
                objectFit: 'contain',
                backgroundColor: '#111'
              }}
            />
            <Box sx={{ p: 3, overflowY: 'auto' }}>
              <Typography variant="h4" component="h2" fontWeight={700} mb={1}>
                {image.title}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1} mb={2} color="text.secondary">
                <MapPinIcon fontSize="small" />
                <Typography variant="body1">{image.location}</Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {image.alt || "Descrição não disponível."}
              </Typography>
            </Box>
          </ModalContentWrapper>
        </Box>
      </Fade>
    </Modal>
  );
}