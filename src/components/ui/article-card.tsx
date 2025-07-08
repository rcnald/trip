import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LinkIcon from '@mui/icons-material/Link';
import type { Article } from '../../types/article';

const formatDate = (dateString: string) => {
  if (!dateString) return 'Data indisponível';
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: theme.transitions.create('all', { duration: '0.3s', easing: 'ease' }),

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[6],
  },
}))

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: theme.transitions.create('all', { duration: '0.3s', easing: 'ease' }),

  '.MuiCard-root:hover &': {
    transform: 'scale(1.05)',
  },
})) as typeof CardMedia

const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: 'primary.dark',
  transition: theme.transitions.create('color', { duration: '0.3s', easing: 'ease' }),
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  '.MuiCard-root:hover &': {
    color: 'primary.main',
  },
})) as typeof Typography

const StyledCardDescription = styled(Typography)(() => ({
  mb: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
})) as typeof Typography

const StyledCardTag = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.dark,
}))

const StyledCardDetailsButton = styled(Button)(() => ({
  background: 'linear-gradient(to right, #039be5, #009688)',

  '&:hover': {
    background: 'linear-gradient(to right, #0288d1, #00897b)',
  }
})) as typeof Button

export default function ArticleCard({ article }: { article: Article }) {
  const articleTagList = article.tag_list.slice(0, 3);
  const hasArticleTags = articleTagList && articleTagList.length > 0;

  return (
    <StyledCard
      key={article.id}
    >
      {article.cover_image && (
        <Box sx={{ position: 'relative', height: 192 }}>
          <StyledCardMedia
            component="img"
            image={article.cover_image}
            alt={article.title}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
            }}
          />
        </Box>
      )}
      <CardHeader
        avatar={<Avatar src={article.user.profile_image} alt={article.user.name} />}
        title={<Typography variant="subtitle2">{article.user.name}</Typography>}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Tooltip arrow placement='top' enterDelay={1000} leaveDelay={200} title={article.title}>
          <StyledCardTitle
            variant="h6"
            component="h2"
            gutterBottom
          >
            {article.title}
          </StyledCardTitle>
        </Tooltip>

        <StyledCardDescription variant="body2" color="text.secondary">
          {article.description || 'Descubra mais sobre esta incrível experiência de viagem...'}
        </StyledCardDescription>

        {hasArticleTags ? (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {articleTagList.map((tag) => (
              <StyledCardTag key={tag} label={tag} size="small" />
            ))}
          </Box>
        ) : null}

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'text.secondary', my: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CalendarTodayIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">{formatDate(article.published_at)}</Typography>
          </Box>
          {article.reading_time_minutes && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <AccessTimeIcon sx={{ fontSize: 16 }} />
              <Typography variant="caption">{article.reading_time_minutes} min</Typography>
            </Box>
          )}
        </Box>

        <StyledCardDetailsButton
          component="a"
          href={article.url}
          target="_blank"
          fullWidth
          variant="contained"
          endIcon={<LinkIcon />}
        >
          Leia Mais
        </StyledCardDetailsButton>
      </CardContent>
    </StyledCard>
  );
}