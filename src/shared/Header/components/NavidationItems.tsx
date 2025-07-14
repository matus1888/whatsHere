import { Box, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router";

interface NavaigationItemProps {
  index: number;
  item: React.ReactNode;
}

function handleNavIndex(
  index: number,
  navigate: ReturnType<typeof useNavigate>,
) {
  switch (index) {
    case 0:
      return navigate("/resume");
    case 1:
      return navigate("/visits");
    case 2:
      window.location.href = "https://matus1888.github.io/clonoOf2048";
      break;
    case 3:
      break;
  }
}
export const NavigationItems = ({ index, item }: NavaigationItemProps) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => handleNavIndex(index, navigate)}
      sx={{
        cursor: "pointer",
        ":hover": { color: "white" },
        ...([3].includes(index) && {
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
      onClick={() => handleNavIndex(index, navigate)}
      disabled={[3].includes(index)}
    >
      <ListItemText>{item}</ListItemText>
    </ListItemButton>
  );
};
