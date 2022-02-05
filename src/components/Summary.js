import { Flex, Text } from "@chakra-ui/react";

export default function Summary({ accountInfos }) {
  return (
    <Flex direction="column">
      <Text>Balance ($Flow): {accountInfos?.balance}</Text>
      <Text>Available Balance ($Flow): {accountInfos?.availableBalance}</Text>
      <Text>Storage Used (kB): {accountInfos?.storageUsed}</Text>
      <Text>Storage Capacity (MB): {accountInfos?.storageCapacity}</Text>
      <Text>
        Flow from storage from Smartcontract function ($FLOW):{" "}
        {accountInfos?.flowFromStorageCapacity}
      </Text>
    </Flex>
  );
}
