import React, { useState, useEffect } from "react";
import { Button, Link } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface GetCodeButtonProps {
  to: string; // URL для перехода
  children: React.ReactNode;
  countdownDuration?: number; // Длительность отсчета (по умолчанию 60 сек)
}

export const GetCodeButton: React.FC<GetCodeButtonProps> = ({
  to,
  children,
  countdownDuration = 60,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(countdownDuration);

  useEffect(() => {
    let timer: number;

    if (isLoading && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsLoading(false);
      setCountdown(countdownDuration);
    }

    return () => clearTimeout(timer);
  }, [isLoading, countdown, countdownDuration]);

  return (
    <Link href={to} target="_blank" rel="noopener noreferrer">
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => setIsLoading(true)}
        disabled={isLoading}
      >
        {isLoading ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CircularProgress
              size={24}
              sx={{
                color: "inherit",
                mr: 1,
              }}
            />
            Повторить через :{countdown}s
          </Box>
        ) : (
          children
        )}
      </Button>
    </Link>
  );
};
