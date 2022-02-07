import { Flex, Text } from "@chakra-ui/react";

export default function Summary({ accountInfos }) {
  return (
    <Flex direction="column">
      <Text>Balance ($Flow): {accountInfos?.balance}</Text>
      <Text>Available Balance ($Flow): {accountInfos?.availableBalance}</Text>
      <Text>Storage Used (kB): {accountInfos?.storageUsed}</Text>
      <Text>Storage Capacity (MB): {accountInfos?.storageCapacity}</Text>
      ------------------------------------------
      <Text>Storage2Flow ($FLOW): {accountInfos?.storage2Flow}</Text>
      <Text>Flow2Storage (MB): {accountInfos?.flow2Storage}</Text>
    </Flex>
  );
}
