import * as fcl from "@onflow/fcl";
import { HStack, Text, Button } from "@chakra-ui/react";

export default function ConnectedState({ user }) {
  return (
    <HStack align="center">
      <Text>👉 {user.addr ?? "no address"}</Text>
      <Button onClick={fcl.unauthenticate} bg="purple.300">
        Disconnect
      </Button>
    </HStack>
  );
}
