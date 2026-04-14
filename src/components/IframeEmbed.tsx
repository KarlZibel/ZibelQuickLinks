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
    <Box sx={{ width: "100%", /*maxWidth: 80*/ mx: "auto" }}>
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
      <Paper variant="outlined" sx={{ overflow: "hidden", borderRadius: 3 }}>
        <Box
          component="iframe"
          src={src}
          title={title}
          allow="fullscreen"
          loading="lazy"
          sx={{ overflow: "hidden", width: "100%", height: "70vh", border: 0, display: "block" }}
        />
      </Paper>
    </Box>
  );
}
