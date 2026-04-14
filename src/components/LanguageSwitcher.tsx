import { useTranslation } from "react-i18next";
import { Button, ButtonGroup } from "@mui/material";
import { supportedLanguages, type LocaleCode } from "@/i18n";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.language?.slice(0, 2) || "en") as LocaleCode;

  return (
    <ButtonGroup size="small" variant="outlined" sx={{ flexShrink: 0 }}>
      {supportedLanguages.map(({ code }) => (
        <Button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          variant={current === code ? "contained" : "outlined"}
          sx={{ minWidth: 64 }}
        >
          {code === "en" ? "EN" : "MT"}
        </Button>
      ))}
    </ButtonGroup>
  );
}
