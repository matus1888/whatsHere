import { Box, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router";

interface NavaigationItemProps {
  index: number;
  item: React.ReactNode;
}
export const NavigationItems = ({ index, item }: NavaigationItemProps) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => {
        switch (index) {
          case 0:
            return navigate("/resume");
          case 1:
            return navigate("/visits");
          case 2:
            return navigate("/services");
          case 3:
            return navigate("/help");
        }
      }}
      sx={{ cursor: "pointer", ":hover": { color: "white" } }}
      key={String(item)}
    >
      {item}
    </Box>
  );
};

export const ListItemNav = ({ item, index }: NavaigationItemProps) => {
  const navigate = useNavigate();
  return (
    <ListItemButton
      onClick={() => {
        switch (index) {
          case 0:
            return navigate("/resume");
          case 1:
            return navigate("/visits");
          case 2:
            return navigate("/services");
          case 3:
            return navigate("/help");
        }
      }}
    >
      <ListItemText>{item}</ListItemText>
    </ListItemButton>
  );
};
