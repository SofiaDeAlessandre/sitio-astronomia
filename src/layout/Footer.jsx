import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      as="footer"
      sx={{
        background: "transparent",
        minWidth: "100%",
        textAlign: "center",
        position: "static",
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        width: "100%",
        padding: "10px 0px",
        color: "#f8bbd0",
        boxShadow: "rgb(190 195 253) 0px 4px 15px",
        backdropFilter: "blur(2px)",
        backgroundColor: "transparent",
        marginTop: "20px",
      }}
    >
      <Typography>COPYRIGTH SOFIA DE ALESSANDRE</Typography>
    </Container>
  );
};

export default Footer;
