export const ACCOUNT_INFO = `import FlowStorageFees from 0xServiceAccount
    pub fun main(address: Address): {String: AnyStruct} {

        // Return Flow from Storage (byte)
        fun returnFlowFromStorage(_ storage: UInt64): UFix64 {
            let f = UFix64(storage % 100000000 as UInt64) * 0.00000001 as UFix64 + UFix64(storage / 100000000 as UInt64)
            let storageMb = f * 100.0 as UFix64
            let storage = FlowStorageFees.storageCapacityToFlow(storageMb)
            return storage
        }

    let account = getAccount(address)
    return {"balance": account.balance, "availableBalance": account.availableBalance, "storageUsed": account.storageUsed, "storageCapacity": account.storageCapacity} 
}`;
