import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";


const socialLinks = [
    {
        icon: faEnvelope,
        url: "mailto: hello@example.com",
      },
      {
        icon: faGithub,
        url: "https://github.com",
      },
      {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
      },
      {
        icon: faMedium,
        url: "https://medium.com",
      },
      {
        icon: faStackOverflow,
        url: "https://stackoverflow.com",
      },
    ];

const Header = () => {
    const handleClick = (anchor) => { 
        const id = `${anchor}-section`;
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    };

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="black"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto" justifyContent="center">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        <HStack spacing={8}>
                        {socialLinks.map(social => <a href={social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></a>)}
                        </HStack>
                    </nav>

                    <nav>
                        <HStack spacing={8} letterSpacing="0.5em">
                            <a on href="#">HOME</a>
                            <a>ABOUT</a>
                            <a href="/#projects-section">CONTACT ME</a>
                            <a href="/#contactme-section">PROJECTS</a>
                        </HStack>
                    </nav>

                </HStack>
            </Box>
        </Box>
    )
};

export default Header;