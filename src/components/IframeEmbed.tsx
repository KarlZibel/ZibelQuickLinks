import { useTranslation } from "react-i18next";
import { Box, Button, Typography, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface IframeEmbedProps {
  title: string;
  src: string;
  onBack: () => void;
}

/**
 * Responsive iframe container with a back button using MUI.
 */
export function IframeEmbed({ title, src, onBack }: IframeEmbedProps) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        flex: 1,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
      }}
    >
      {/* Back button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={onBack}
        color="inherit"
        sx={{ mb: 2, color: "text.secondary" }}
      >
        {t("common.backToLinks")}
      </Button>

      {/* Title */}
      <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
        {title}
      </Typography>

      {/* Responsive iframe */}
      <Paper
        variant="outlined"
        sx={{
          overflow: "hidden",
          borderRadius: 3,
          flex: 1,
          minHeight: 0,
          width: "100%",
        }}
      >
        <Box
          component="iframe"
          src={src}
          title={title}
          allow="fullscreen"
          loading="lazy"
          sx={{
            overflow: "hidden",
            width: "100%",
            height: "100%",
            border: 0,
            display: "block",
          }}
        />
      </Paper>
    </Box>
  );
}
