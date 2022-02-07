export const ACCOUNT_INFO = `import FlowStorageFees from 0xServiceAccount
    pub fun main(address: Address): {String: AnyStruct} {
    let account = getAccount(address)
    let storageMb = UFix64(account.storageCapacity/1000000)
    let storage2Flow = FlowStorageFees.storageCapacityToFlow(storageMb)
    let flow2storage = FlowStorageFees.flowToStorageCapacity(storage2Flow)
    return {"balance": account.balance, "availableBalance": account.availableBalance, "storageUsed": account.storageUsed/1000, "storageCapacity": storageMb,  "storage2Flow": storage2Flow, "flow2Storage":flow2storage} 
}`;
