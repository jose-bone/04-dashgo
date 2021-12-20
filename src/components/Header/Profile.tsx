import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>José Boné</Text>
        <Text color="gray.300" fontSize="small">
          bjosemateus@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="José Boné"
        src="https://github.com/jose-bone.png"
      />
    </Flex>
  );
}
