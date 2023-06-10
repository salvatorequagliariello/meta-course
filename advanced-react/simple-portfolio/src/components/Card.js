import { Card, CardBody, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardP = ({title, description, imageSrc}) => {

    return (
        <Card borderRadius={17}>
                <Image src={imageSrc} borderRadius={15}/>
            <CardBody borderRadius={10}>
                <Heading as='h4' size="md">{title}</Heading>
                <Text marginY={5}>{description}</Text>
                <HStack>
                    <Text fontWeight="bold">See More</Text>
                    <FontAwesomeIcon icon={faArrowRight} />
                </HStack>
            </CardBody>
        </Card>
    );
};

export default CardP;