import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Typography sx={{ color: "rgb(246, 188, 207)" }}>
        Soy aficionada de esta ciencia tan fascinante llamada "Astronomía",
        fotógrafa amateur y amante de la naturaleza. Creé esta web con el fín de
        mostrar y expandir la belleza de cada fenómeno. En la misma, se exponen
        fotos que tomé de La Luna, eclipses, tormentas y cometas.{" "}
      </Typography>
    </Container>
  );
};

export default About;
