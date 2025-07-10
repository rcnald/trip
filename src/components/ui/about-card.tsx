import { alpha, Box, Card, CardContent, styled, Typography } from "@mui/material";

interface IconWrapperProps { iconColor: 'primary' | 'secondary' | 'success' | 'warning' }

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',

  transition: theme.transitions.create('box-shadow'),
  border: `1px solid ${theme.palette.grey[200]}`,
  height: '100%',

  '&:hover': {
    boxShadow: theme.shadows[4],
  },

  [theme.breakpoints.up('md')]: {
    maxWidth: '360px',
  }
}));

const IconWrapper = styled(Box)<IconWrapperProps>(({ theme, iconColor = 'primary' }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  backgroundColor: alpha(theme.palette[iconColor].main, 0.1),
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),

  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
    color: theme.palette[iconColor].main,
  },
}));


export const AboutCard = ({ iconColor, icon :Icon, title, description }: { iconColor: IconWrapperProps['iconColor'], icon: React.ReactNode, title: string, description: string }) => {
  return (
    <StyledCard variant="outlined">
      <CardContent>
        <IconWrapper iconColor={iconColor}>
          {Icon}
        </IconWrapper>
        <Typography variant="h6" component="h4" fontWeight="bold" color="primary.dark" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}