import { theme } from "@/styles/theme";
import { Box, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { NavBar } from "@/components/index";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ p: 0, m: 0 }}>
            <NavBar />
            <Stack position={"relative"} top={48.4}>
              {children}
            </Stack>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
