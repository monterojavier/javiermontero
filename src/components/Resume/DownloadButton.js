import { DownloadIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import resume from "../../assets/resume.pdf";

export default function DownloadButton() {
  return (
    <div>
      <Button
        variant="primary"
        href={resume}
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        <DownloadIcon />
        &nbsp;Download CV
      </Button>
    </div>
  );
}
