import { styled } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

const StyledLink = styled(LinkRouter)(({ theme }) => ({
  color: theme.palette.grey[700],
  textDecoration: "none",
  cursor: "pointer",
  fontSize: theme.typography.pxToRem(16),
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.short,
  }),

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export type LinkProps = React.ComponentProps<typeof StyledLink> 

export const Link = ({ children, ...props } : LinkProps) => {
  return (
    <StyledLink {...props}>{children}</StyledLink>
  );
}