import { createTheme } from "@mui/material/styles";

/**
 * MUI theme for zibel.org
 * Navy background (#26374b) + green accent (#74a943)
 */
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#26374b",
      paper: "#2f4260",
    },
    primary: {
      main: "#74a943",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#3a5068",
      contrastText: "#e0e0e0",
    },
    text: {
      primary: "#f5f5f5",
      secondary: "#a0b4c8",
    },
    divider: "#3a5068",
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: { fontFamily: "'Outfit', sans-serif" },
    h2: { fontFamily: "'Outfit', sans-serif" },
    h3: { fontFamily: "'Outfit', sans-serif" },
    h4: { fontFamily: "'Outfit', sans-serif" },
    h5: { fontFamily: "'Outfit', sans-serif" },
    h6: { fontFamily: "'Outfit', sans-serif" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 24px -4px rgba(116, 169, 67, 0.2)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
