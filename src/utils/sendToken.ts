//@ts-nocheck

import * as fcl from "@onflow/fcl";
import { toast } from "sonner";

export const transferToken = async (toAddress: string, amount: string) => {
  const cadence = `
    import FungibleToken from 0x9a0766d93b6608b7
    import FlowToken from 0x7e60df042a9c0868
      transaction(recipient: Address, amount: UFix64) {
        prepare(signer: AuthAccount) {
          let sender = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)
          ?? panic("Could not borrow Provider reference to the Vault")

          let receiverAccount = getAccount(recipient)

          let receiver = receiverAccount.getCapability(/public/flowTokenReceiver)
          .borrow<&FlowToken.Vault{FungibleToken.Receiver}>()
          ??panic("Could not borrow Receiver reference to the Vault")

          let tempVault <- sender.withdraw(amount: amount)
          receiver.deposit(from: <- tempVault)
        }
      }
    `;
  const trasnsactionId = await fcl.mutate({
    cadence,
    limit: 1000,
    args: (arg, t) => [
      arg(toAddress, t.Address),
      arg(Number.parseFloat(amount).toFixed(2), t.UFix64),
    ],
    payer: fcl.authz,
    proposer: fcl.authz,
    authorizations: [fcl.authz],
  });
  const transaction = await fcl.tx(trasnsactionId).onceSealed();
  transaction
    ? toast.success("Transaction was successful!")
    : toast.error("Transaction failed!");
};
