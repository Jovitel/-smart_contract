const JoviStore = artifacts.require("JoviStore");

contract("JoviStore", (accounts) => {
  let instance;
  const seller = "0xd61e0ed7b8fb3aA1eb8CB0E7a32c0137d0fDa42e";  // Pirmas paskyros adresas
  const buyer = "0x3Fbd6FeE8F092dE798B325312dda3EB8DFdC1811";   // Antras paskyros adresas
  const courier = 0x2ff5346C46926E2952f93Bb5eab9350A35A21061;  // Kurjeris, galima naudoti trečią paskyrą
  const price = web3.utils.toWei('1', 'ether');  // Nustatoma kaina (1 ETH)

  beforeEach(async () => {
    instance = await JoviStore.new(seller, buyer, price);
  });

  it("should deploy contract", async () => {
    assert(instance !== null, "Contract instance is null");
  });

  it("should allow buyer to pay", async () => {
    await instance.pay({ from: buyer, value: price });
    const paid = await instance.paid();
    assert.strictEqual(paid, true, "Payment was not marked as complete");
  });

  it("should allow seller to assign courier", async () => {
    await instance.assignCourier(courier, { from: seller });
    const assignedCourier = await instance.courier();
    assert.strictEqual(assignedCourier, courier, "Courier was not assigned correctly");
  });

  it("should allow courier to confirm delivery", async () => {
    await instance.assignCourier(courier, { from: seller });
    await instance.confirmDelivery({ from: courier });
    const delivered = await instance.delivered();
    assert.strictEqual(delivered, true, "Delivery was not confirmed correctly");
  });

  it("should release payment when delivered", async () => {
    const initialSellerBalance = BigInt(await web3.eth.getBalance(seller));

    await instance.pay({ from: buyer, value: price });
    await instance.assignCourier(courier, { from: seller });
    await instance.confirmDelivery({ from: courier });
    await instance.releasePayment({ from: seller });

    const finalSellerBalance = BigInt(await web3.eth.getBalance(seller));
    assert(finalSellerBalance > initialSellerBalance, "Seller did not receive payment");
  });
});
