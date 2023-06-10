import FullScreenSection from "./FullScreenSection";
import { Grid, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
    {
      title: "React Space",
      description:
        "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
      getImageSrc: () => require("../images/photo1.jpg"),
    },
    {
      title: "React Infinite Scroll",
      description:
        "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
      getImageSrc: () => require("../images/photo2.jpg"),
    },
    {
      title: "Photo Gallery",
      description:
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
      getImageSrc: () => require("../images/photo3.jpg"),
    },
    {
      title: "Event planner",
      description:
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
      getImageSrc: () => require("../images/photo4.jpg"),
    },
  ];

const ProjectSection = () => {
    return (
        <FullScreenSection
            backgroundColor="#14532d"
            isDarkBackground
            p={8}
            alignItems="flex-start"
            spacing={8}
            
            id="projects-section"
        >
            <Heading textAlign="left">Featured Projects</Heading>
            <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr" gridGap={8}>
                {projects.map(card => <Card title={card.title} description={card.description} imageSrc={card.getImageSrc()} />)}
            </Grid>
        </FullScreenSection>
    )

};

export default ProjectSection;