import { Text } from "@chakra-ui/react";

const MenuItem = (props) => {
  return (
    <Text
      mb={{ base: props.isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: props.isLast ? 0 : 8 }}
      display="block"
    >
      <a href={props.url}>{props.displayText}</a>
    </Text>
  );
};

export default MenuItem;
