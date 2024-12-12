if (window.ethereum) {
    console.log("MetaMask ir Ethereum teikėjas yra pasiekiami.");
} else {
    console.log("MetaMask nėra įdiegtas arba nėra pasiekiamas.");
}
// Funkcija, kuri atidaro modalą, kai paspaudžiamas "Pirkti" mygtukas
function openContractModal(price) {
    var modal = document.getElementById("contractModal");
    modal.style.display = "block";  // Atidarome modalą
    // Pridedame kainą prie modalio, kad vartotojas matytų ją
    document.getElementById("confirmContract").setAttribute("data-price", price);
}

// Funkcija, kuri uždaro modalą
function closeContractModal() {
    var modal = document.getElementById("contractModal");
    modal.style.display = "none";  // Uždaryti modalą
}

// Asinchroninė funkcija, kuri apdoroja mokėjimą su MetaMask
async function handlePayment() {
    // Patikrinkite, ar MetaMask yra įdiegta
    if (window.ethereum) {
        try {
            // Sukuriame Web3 provider'į naudojant MetaMask
            const provider = new ethers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []); // Prašome vartotojo prisijungti su MetaMask

            // Sukuriame signer
            const signer = provider.getSigner();

            // Nustatome Ethereum išmaniąją sutartį ir jos adresą
            const contractAddress = "0x7591b2CC8dd2E691d9FB404061BAbe9569Da5eb4"; // Jūsų išmaniosios sutarties adresas
            const contractABI = [
                "function pay() public payable",
                "function assignCourier(address _courier) public",
                "function confirmDelivery() public",
                "function releasePayment() public",
                "event PaymentMade(address indexed buyer, uint256 amount)",
                "event CourierAssigned(address indexed courier)",
                "event DeliveryConfirmed(address indexed courier)"
            ];

            const contract = new ethers.Contract(contractAddress, contractABI, signer);

            // Gaukite kainą iš duomenų atributo (price reikšmė)
            const price = document.getElementById("confirmContract").getAttribute("data-price");
            const paymentAmount = ethers.utils.parseEther(price.toString()); // Kaina, už kurią pirkėjas turi sumokėti

            // Kvieskite funkciją "pay"
            const tx = await contract.pay({
                value: paymentAmount
            });

            console.log("Transaction hash: " + tx.hash);
            await tx.wait(); // Palaukite, kol sandoris bus patvirtintas

            alert("Mokėjimas atliktas!");
            closeContractModal(); // Uždaryti modalą po patvirtinimo
        } catch (error) {
            console.error("Sutarties patvirtinimo klaida:", error);
            alert("Įvyko klaida! Patikrinkite savo MetaMask nustatymus.");
        }
    } else {
        alert("Ethereum provider not found! Please install MetaMask.");
    }
}

// Kai paspaudžiamas "Atšaukti", uždarome modalą
document.getElementById("cancelContract").onclick = function() {
    closeContractModal();
}

// Uždaryti modalą, jei paspaudžiama už jo ribų
window.onclick = function(event) {
    var modal = document.getElementById("contractModal");
    if (event.target == modal) {
        closeContractModal();
    }
}

// Susiejame "Pirkti" mygtukus su modalą atidarančia funkcija
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const price = button.getAttribute('data-price');
        openContractModal(price); // Atidaryti modalą ir perduoti kainą
    });
});

// Susiejame "Patvirtinti" mygtuką su mokėjimo funkcija
document.getElementById("confirmContract").onclick = handlePayment;
