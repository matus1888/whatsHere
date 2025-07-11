import React from "react";
import "./layout.css";
import { Header } from "./shared";
import { Logo, MessagerBtn, ProfileMenuButton } from "./shared/Header/components";

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
  const { messagerBtn = <MessagerBtn /> } = footerProps || {};
  return (
    <>
      <Header
        logo={logo}
        sections={sections}
        messagerBtn={messagerBtn}
        profileButton={profileButton}
        buttonTitle="Example"
      />
      <main>{main}</main>
      <footer >
        <button
          style={{
            width: "112px",
            height: "49px",
            borderRadius: "24px",
            border: '0px',
            color: "white",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            focusable="false"
          >
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 9C0 14.6663 5.3512 16.7652 11 16.9811V23C15.0777 19.6019 24 15.0516 24 9C24 3 18 1 12 1C6 1 0 3 0 9ZM7 9.9H17V8.1H7V9.9Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
          <div style={{ fontSize: "16px" }}>Чаты</div>
        </button>
      </footer>
    </>
  );
};
