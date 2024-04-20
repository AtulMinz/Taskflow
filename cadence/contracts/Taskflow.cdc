pub contract Taskflow {
    pub var accountBalance: UFix64

    pub fun transfer(amount: UFix64) {
        let borrowedAmount: UFix64 = amount

        self.accountBalance = self.accountBalance - borrowedAmount
    }

    init(accountBalance: UFix64) {
        self.accountBalance = 100.1;
        log("Working")
    }
}