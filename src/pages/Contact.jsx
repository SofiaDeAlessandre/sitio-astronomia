import { Container, Typography } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          gap: "2em",
        }}
      >
        <Link
          href="https://mail.google.com"
          style={{ color: "rgb(246, 188, 207)", textDecoration: "none" }}
        >
          <MdEmail /> Dealessandresofia@gmail.com
        </Link>
        <Link
          href="https://www.linkedin.com/in/sof%C3%ADa-de-alessandre/"
          style={{ color: "rgb(246, 188, 207)", textDecoration: "none" }}
        >
          <FaLinkedin /> Linkedin
        </Link>
        <Link
          href="https://github.com/SofiaDeAlessandre "
          style={{ color: "rgb(246, 188, 207)", textDecoration: "none" }}
        >
          <FaGithub /> Github
        </Link>
      </Container>
    </>
  );
};

export default Contact;
