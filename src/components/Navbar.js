import { Flex, Text } from "@chakra-ui/react";
import ConnectedState from "./ConnectedState";
import UnAuthenticatedState from "./UnAuthenticatedState";

export default function Navbar({ user }) {
  return (
    <>
      <Flex bg="tomato" w="100%" p={4} color="white" justify="space-between">
        <Text>Welcome to my quick Flow App</Text>
        {user.loggedIn ? (
          <ConnectedState user={user} />
        ) : (
          <UnAuthenticatedState />
        )}
      </Flex>
    </>
  );
}
