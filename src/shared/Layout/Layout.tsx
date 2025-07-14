import React from "react";
import { Header } from "../";
import { ProfileMenuButton } from "../Header/components";
import { Button } from "../ui";
import { Message, Logo } from "../ui/Icons";
import { Link } from "@mui/material";

export interface LayoutProps {
  headerProps?: {
    logo: React.ReactNode;
    sections: React.ReactNode[];
    actions: React.ReactNode[];
    profileButton: React.ReactNode;
  };
  footerProps?: {
    messagerBtn: React.ReactNode;
  };
  main?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  headerProps,
  footerProps,
  main = "main informaton",
}) => {
  const {
    logo = <Logo />,
    sections = ["Мои резюме", "Посещения", "Сервисы", "Помощь"],
    profileButton = <ProfileMenuButton />,
  } = headerProps || {};
  const { messagerBtn = <Message /> } = footerProps || {};
  return (
    <>
      <Header
        logo={logo}
        sections={sections}
        messagerBtn={messagerBtn}
        profileButton={profileButton}
      />
      <main>{main}</main>
      <footer>
        <Link
          target="_blank"
          href="https://t.me/matus1888"
          sx={{textDecoration: "none"}}
        >
          <Button
            sx={{ paddingX: "20px" }}
            startIcon={messagerBtn}
            variant="contained"
            color="info"
          >
            TLG send
          </Button>
        </Link>
      </footer>
    </>
  );
};
