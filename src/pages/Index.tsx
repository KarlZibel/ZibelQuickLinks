import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider, CssBaseline, Container, Box, Typography, Grid } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import zibelLogo from "@/assets/zibel-logo.avif";
import theme from "@/theme";
import { LinkCard } from "@/components/LinkCard";
import { IframeEmbed } from "@/components/IframeEmbed";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

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
  },
  {
    id: "invoice",
    icon: <RequestQuoteIcon />,
    href: "https://forms.monday.com/forms/embed/398b00e0fab6f17d3d6c171df26d5fe8?r=euc1",
    type: "iframe" as const,
  },
  {
    id: "ghostNetReporting",
    icon: <CatchingPokemonIcon />,
    href: "https://forms.monday.com/forms/embed/f60be52d2885d48ec2ba718d61f2b819?r=euc1",
    type: "iframe" as const,
  }
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
          minHeight: "100dvh",
          height: activeIframe ? "100dvh" : "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          px: activeIframe ? { xs: 1, sm: 2, md: 3 } : 2,
          py: activeIframe ? { xs: 2, sm: 3 } : { xs: 5, sm: 8 },
          overflow: activeIframe ? "hidden" : "visible",
        }}
      >
        {!activeIframe && (
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
        )}

        <Container
          disableGutters
          maxWidth={false}
          sx={{
            width: "100%",
            flex: activeIframe ? 1 : "0 1 auto",
            display: activeIframe ? "flex" : "block",
            minHeight: activeIframe ? 0 : "auto",
            height: activeIframe ? "100%" : "auto",
          }}
        >
          {activeIframe ? (
            <IframeEmbed
              title={activeIframe.label}
              src={activeIframe.href}
              onBack={() => setActiveIframe(null)}
            />
          ) : (
            <Grid
              container
              spacing={1}
              justifyContent="center"
              sx={{ maxWidth: 1000, mx: "auto" }}
            >
              {LINKS.map((link) => {
                const label = t(`links.${link.id}.label`);
                const description = t(`links.${link.id}.description`);

                return (
                  <Grid size={{ xs: 12, sm: 6 }} key={link.id} sx={{ display: "flex" }}>
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

        {!activeIframe && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: "auto", pt: 6 }}>
            © {new Date().getFullYear()} Żibel · {t("home.footer")}
          </Typography>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Index;
