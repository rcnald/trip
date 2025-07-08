import { styled } from "@mui/material";
import ExploreIcon from '@mui/icons-material/Explore'


const StyledLogo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
}));

export const Logo = () => {
  return (
    <StyledLogo>
      <ExploreIcon />
      ViajeMais
    </StyledLogo>
  )
}