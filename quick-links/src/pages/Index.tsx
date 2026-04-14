import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider, CssBaseline, Container, Box, Typography, Grid } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DeleteIcon from '@mui/icons-material/Delete';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import zibelLogo from "@/assets/zibel-logo.avif";
import theme from "@/theme";
import { LinkCard } from "@/components/LinkCard";
import { IframeEmbed } from "@/components/IframeEmbed";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

/* ───────────────────────────────────────────
   QUICK LINKS CONFIGURATION
   Replace URLs below with real destinations.
   Labels/descriptions come from src/locales (en.json / mt.json).
   ─────────────────────────────────────────── */
const LINKS = [
  {
    id: "tribeBinEmptying",
    icon: <DeleteOutlineIcon />,
    href: "https://forms.monday.com/forms/embed/f9cd2727621149ba501423d95ebc2ec9?r=euc1",
    type: "iframe" as const,
  },
  {
    id: "cleanUp",
    icon: <CleaningServicesIcon />,
    href: "https://forms.monday.com/forms/embed/422b53b6b4f49645029d324937eeb539?r=euc1",
    type: "iframe" as const,
  }
  /*,
  {
    id: "Invoice",
    icon: <DescriptionOutlinedIcon />,
    href: "https://example.com/claim-invoice",
    type: "external" as const,
  },
  {
    id: "operations",
    icon: <DashboardOutlinedIcon />,
    href: "https://view.monday.com/1587281256-e2c8989252060c57cecbb32ecc47d552?r=euc1&is_sharable_link=true",
    type: "iframe" as const,
  },
  {
    id: "ghostNetReporting",
    icon: <CampaignOutlinedIcon />,
    href: "https://forms.monday.com/forms/embed/f60be52d2885d48ec2ba718d61f2b819?r=euc1&is_sharable_link=true",
    type: "iframe" as const,
  },
  {
    id: "volunteer",
    icon: <GroupOutlinedIcon />,
    href: "https://example.com/volunteer",
    type: "external" as const,
  },
  {
    id: "help",
    icon: <HelpOutlineIcon />,
    href: "https://example.com/help",
    type: "external" as const,
  },*/
];

const Index = () => {
  const { t } = useTranslation();
  const [activeIframe, setActiveIframe] = useState<{
    label: string;
    href: string;
  } | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
          py: { xs: 5, sm: 8 },
        }}
      >
        {/* ── Header / Logo + Language ── */}
        <Box sx={{ mb: 5, textAlign: "center", width: "100%", maxWidth: 400, mx: "auto" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
            <LanguageSwitcher />
          </Box>
          <Box
            component="img"
            src={zibelLogo}
            alt="Żibel logo"
            sx={{
              borderRadius: 3,
              objectFit: "cover",
              mx: "auto",
              mb: 2,
            }}
          />
          <Typography variant="h5" color="text.secondary" sx={{ mt: 1, maxWidth: 400, mx: "auto" }}>
            {t("home.tagline")}
          </Typography>
        </Box>

        {/* ── Main content ── */}
        <Container disableGutters>
          {activeIframe ? (
            <IframeEmbed
              title={activeIframe.label}
              src={activeIframe.href}
              onBack={() => setActiveIframe(null)}
            />
          ) : (
            <Grid container spacing={2}>
              {LINKS.map((link) => {
                const label = t(`links.${link.id}.label`);
                const description = t(`links.${link.id}.description`);
                return (
                  <Grid size={{ xs: 12, sm: 6 }} key={link.id}>
                    <LinkCard
                      label={label}
                      description={description}
                      icon={link.icon}
                      href={link.href}
                      type={link.type}
                      onIframeClick={() =>
                        link.type === "iframe"
                          ? setActiveIframe({ label, href: link.href })
                          : undefined
                      }
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Container>

        {/* ── Footer ── */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: "auto", pt: 6 }}>
          © {new Date().getFullYear()} Żibel · {t("home.footer")}
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Index;
