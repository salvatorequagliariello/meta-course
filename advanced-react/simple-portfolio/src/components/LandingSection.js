import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, VStack } from "@chakra-ui/react";

const user = {
    name: "Pete",
    image: "https://i.pravatar.cc/150?img=7",
}

const LandingSection = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#2A4365"
            >
            <VStack>
                <Avatar size="2xl" name={user.name} src={user.image} />
                <p>Hello, I am Pete!</p>
                <Heading marginBottom="20px"></Heading>
                <Heading>A frontend developer</Heading>
                <Heading>specialised in React</Heading>
            </VStack>
        </FullScreenSection>
        )
}

export default LandingSection;
