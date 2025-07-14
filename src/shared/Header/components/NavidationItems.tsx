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
          case 3:
        }
      }}
      sx={{
        cursor: "pointer",
        ":hover": { color: "white" },
        ...([2, 3].includes(index) && {
          color: "grey",
          ":hover": { color: "grey" },
        }),
      }}
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
      disabled={[2, 3].includes(index)}
    >
      <ListItemText>{item}</ListItemText>
    </ListItemButton>
  );
};
