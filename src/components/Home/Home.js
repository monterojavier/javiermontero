import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import "./Home.css";
import bitmoji from "../../assets/bitmoji.png";

export default function Home() {
  return (
    <section>
      <Container className="home-section">
        <Container className="home-content">
          <SimpleGrid h="200px" columns={2} spacing={5}>
            <Box colSpan={2}>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JAVIER MONTERO</strong>
              </h1>
            </Box>
            <Box colSpan={3}>
              <img src={bitmoji} alt="bitmoji" />
            </Box>
          </SimpleGrid>
        </Container>
      </Container>
    </section>
  );
}
