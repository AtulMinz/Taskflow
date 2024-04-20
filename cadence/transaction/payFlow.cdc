import Taskflow from 0x2e25912fb78c0f35

    transaction(amount: UFix64) {
        prepare(signer: AuthAccount) {
        log("Getting things ")
    }
    execute {
        Taskflow.transfer(amount: 11.9)
        log("Done")
    }
}