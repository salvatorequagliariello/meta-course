import { Card, CardBody, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectSection = ({title, description, imageSrc}) => {

    return (
        <Card>
            <CardBody>
                <Image src={imageSrc} />
                <Heading>{title}</Heading>
                <Text>{description}</Text>
            </CardBody>
        </Card>
    );
};

export default ProjectSection;