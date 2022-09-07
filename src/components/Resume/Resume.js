import React, { useState, useEffect } from "react";
import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import DownloadButton from "./DownloadButton";
import { Document, Page } from "react-pdf";
import resume from "../../assets/resume.pdf";
import "./Resume.css";

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container className="resume-section">
      <SimpleGrid style={{ justifyContent: "center", position: "relative" }}>
        <Box style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton />
        </Box>
        <Box className="resume">
          <Document
            file={resume}
            options={{ workerSrc: "pdf.worker.js" }}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Box>
        <Box style={{ justifyContent: "center", position: "relative" }}>
          <DownloadButton />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
