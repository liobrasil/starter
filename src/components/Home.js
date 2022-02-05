import * as fcl from "@onflow/fcl";
import { useEffect, useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Summary from "./Summary";
import { ACCOUNT_INFO } from "../cadence/scripts/account-info.script.js";

export default function Home({ user }) {
  const [accountInfos, setAccountInfos] = useState();
  useEffect(() => {
    if (user.loggedIn) {
      (async () =>
        setAccountInfos(
          await fcl.query({
            cadence: ACCOUNT_INFO,
            args: (arg, t) => [arg(user.addr, t.Address)],
          })
        ))();
    }
  }, [user]);

  return (
    <Flex py="10" bg="gray.100" h="100%" align="center" direction="column">
      <Text mb="10px">Showing Account Info:</Text>

      {user.loggedIn && <Summary accountInfos={accountInfos} />}
      <Text>{user.loggedIn}</Text>
    </Flex>
  );
}
