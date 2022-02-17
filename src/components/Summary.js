import { Flex, Text } from "@chakra-ui/react";

export default function Summary({ accountInfos }) {
  return (
    <Flex direction="column">
      <Text>Balance ($Flow): {accountInfos?.balance}</Text>
      <Text>Available Balance ($Flow): {accountInfos?.availableBalance}</Text>
      <Text>Storage Used (bytes): {accountInfos?.storageUsed}</Text>
      <Text>Storage Capacity (bytes): {accountInfos?.storageCapacity}</Text>
    </Flex>
  );
}
