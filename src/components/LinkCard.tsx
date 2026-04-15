import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardActionArea, CardContent, Box, Typography, Avatar } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface LinkCardProps {
  label: string;
  description: string;
  icon: ReactNode;
  href: string;
  type: "external" | "iframe";
  onIframeClick: () => void;
}

/**
 * A single quick-link card using MUI.
 * External links open in a new tab; iframe links trigger an in-page embed.
 */
export function LinkCard({ label, description, icon, href, type, onIframeClick }: LinkCardProps) {
  const { t } = useTranslation();
  const opensInNewTab = t("common.opensInNewTab");
  const cardSx = { width: "100%", maxWidth: 1000, mx: "auto" };
  const cardContent = (
    <CardContent sx={{ display: "flex", alignItems: "flex-start", gap: 2, p: 2, "&:last-child": { pb: 2 } }}>
      {/* Icon avatar */}
      <Avatar
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          width: 40,
          height: 40,
          borderRadius: 2,
        }}
      >
        {icon}
      </Avatar>

      {/* Text */}
      <Box sx={{ flex: 1, minWidth: 0, minHeight: 68 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Typography variant="subtitle1" fontWeight={600} noWrap>
            {label}
          </Typography>
          {type === "external" && (
            <OpenInNewIcon sx={{ fontSize: 14, color: "text.secondary", opacity: 0.6 }} />
          )}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </CardContent>
  );

  if (type === "external") {
    return (
      <Card variant="outlined" sx={cardSx}>
        <CardActionArea
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} (${opensInNewTab})`}
        >
          {cardContent}
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Card variant="outlined" sx={cardSx}>
      <CardActionArea onClick={onIframeClick}>
        {cardContent}
      </CardActionArea>
    </Card>
  );
}
