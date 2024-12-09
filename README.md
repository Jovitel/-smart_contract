# 4-asis darbas: išmaniosios sutarties ir decentralizuotos aplikacijos kūrimas

## Tikslas

Pagrindinis šios užduoties tikslas yra sukurti išmaniąją sutartį (angl. smart
contract), kuri įgyvendintų tam tikrą verslo logiką ir galėtų užtikrinti jos "saugų"
ir "patikimą" funkcionavimą decentralizuotame viešąjame tinkle. Išmaniosios sutarties
valdymui ir verslo proceso dalyvių tarpusavio sąveikai palengvinti bus kuriama
decentralizuota aplikacija su Front-End .

Šioje užduotyje išmanioji sutartis įgyvendinama Solidyti programavimo kalba ir turi
būti adaptuota Ethereum blockchain tinklui. Šiai užduočiai atlikti Jums reikės:

+ Išmaniosios sutarties kūrimui rekomenduojama naudoti "on-line" įrankį Remix
IDE, o testavimui ir diegimui Truffle IDE, kurį reikia įdiegti į savo
kompiuterį.

+ Decentralizuotos aplikacijos testavimui galite naudoti Ganache įrankį, kuris
sukuria lokalų Ethereum tinklą.

+ Jums taip pat prireiks kliento MetaMask, kuris įgalins sąsają su Ethereum
tinklu.

+ Išmaniosios sutarties testavimui naudokite ir vieną iš viešųjų Ethereum
testinių tinklų (angl. testnet), pvz., Goerli.

## Užduoties formuluotė

1. Aprašykite išmaniosios sutarties verslo modelio logiką, kurią įgyvendins
išmanioji sutartis.

+ Pasirinkite verslo modelį pvz., https://medium.com/coinmonks/build-asmart-contract-to-sell-goods-6cf73609d25. Šiame verslo modelyje
dalyvauja tokios šalys: pirkėjas , pardavėjas , kurjeris , o pati
išmanioji sutartis užtikrina "saugų" prekių pardavimą/pirkimą ir
pristatymą .

+ Entuziastai, kurie pasirinks ir aprašys kitą verslo modelį ir jo
pagrindų įgyvendins išmaniąją sutartį (sutartis) ir decentralizuotą
aplikaciją, papildomai gaus iki 0,75 balo (priklausomai nuo idėjos,
sudėtingumo ir įgyvendinimo).

2. Realizuokite pirmąjame žingsnyje aprašytą verslo logiką išmanioje sutartyje
Solidyti kalboje.

3.  Ištestuokite išmaniosios sutarties veikimą Ethereum lokaliame tinkle ir
Ethereum testiniame tinkle (pvz., Goerli).

4. Naudojant Ethereum testinio tinklo Etherscan peržiūrėkite išmaniosios
sutarties vykdymo "logus".

5. Sukurkite decentralizuotos aplikacijos Front-End ą (tinklapį arba mobiliąją
aplikaciją), kuri įgalintų bendravimą su išmaniąja sutartimi.

+ **Planas minimum:** minimalistinio dizaino ir minimalaus funkcionalumo
aplikacija, kuri tiesiog užtirkintų sąveiką su verslo modelio dalyviais
ir leistų aktyvuoti išmaniosios sutarties funkcijas, pateikti/nuskaityti
sutarčiai reikalingus duomenis.

+ **Planas maximum (papildomai iki 0,75 balo prie darbo!):** praplėsto
funkcionalamo (ir dizaino) aplikacija. Čia žiūrėkite kūrybiškai,
atsižvelgiant į turimą laiką, patirtį ir galimybes.

## Papildoma medžiaga

### Dokumentacijos:

1. Solidyti dokumentacija - https://docs.soliditylang.org/en/v0.8.28/
2. Remix IDE dokumentacija - https://remix-ide.readthedocs.io/en/latest/
3. Truffle IDE dokumentacija - https://archive.trufflesuite.com/docs/

## Išmaniųjų sutarčių ir decentralizuotų aplikacijų kūrimo pamokos ir pavyzdžiai:

+ https://www.coursera.org/learn/smarter-contracts/

+ https://www.coursera.org/learn/decentralized-apps-on-blockchain

+ https://www.dappuniversity.com/

+ https://www.quicknode.com/guides/ethereum-development/smart-contracts/how-to-create-a-hello-world-smart-contract-with-solidity

+ https://livebook.manning.com/book/building-ethereum-dapps/about-this-book/

## DIEGIMAI

### Truffle IDE diegimas

1. Reikia instaliuoti Node.js ir npm.
<img src="https://github.com/user-attachments/assets/9b54d31a-48d9-4f23-a0aa-61425522318e" alt="Vaizdas" width="600"/>

+  Tam naudojama Node Version Manager (nvm). Todėl parsisiunčiama nvm is https://github.com/coreybutler/nvm-windows/releases
<img src="https://github.com/user-attachments/assets/169241f8-145c-4627-a428-7dabd43f91a9" alt="Vaizdas" width="600"/>


+ Atsisiunčiau nvm-setup.zip (diegimo failą) ir jį paleidau nvm-setup.exe
<img src="https://github.com/user-attachments/assets/b12f0703-2670-4a15-acf4-e3f128140e39" alt="Vaizdas" width="600"/>


+ Tikrinama, ar nvm įdiegta. Matome įdiegtą nvm versiją.
<img src="https://github.com/user-attachments/assets/997a6c58-2aab-4af8-b0ef-539caeabab9c" alt="Vaizdas" width="600"/>


+ Instaliuojame Node.js 18 versiją su nvm.
```
C:\Users\JV>nvm --version
1.1.12

C:\Users\JV>nvm install 18
Downloading node.js version 18.20.5 (64-bit)...
Extracting node and npm...
Complete
npm v10.8.2 installed successfully.


Installation complete. If you want to use this version, type

nvm use 18.20.5
```


+ Pakeičiame, kad naudotume šią versiją.
```
C:\Users\JV>nvm use 18
Now using node v18.20.5 (64-bit)
```

2. Intsaliuojame Truffle IDE
```
C:\Users\JV>npm install -g truffle
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated mkdirp-promise@5.0.1: This package is broken and no longer maintained. 'mkdirp' itself supports promises now, please switch to that.
npm warn deprecated har-validator@5.1.5: this library is no longer supported
ir taip toliau..

added 1159 packages in 3m
npm notice
npm notice New minor version of npm available! 10.8.2 -> 10.9.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.9.1
npm notice To update run: npm install -g npm@10.9.1
npm notice
```
+ Buvo daugybė pasenusių paketų su įspėjimais. Šie įspėjimai rodo, kad Truffle naudojamos bibliotekos turi senesnes ar nepalaikomas versijas. Nors šie įspėjimai nesustabdo diegimo, būtų           patartina atnaujinti šias bibliotekas į naujausias versijas, kad užtikrinti suderinamumą ir išvengti galimų problemų. Pabaigoje išvesties buvo pasiūlyta įdiegti naujausią npm versiją.

```
C:\Users\JV>npm install -g npm@latest
changed 18 packages in 1m
C:\Users\JV>npm -v
10.9.1
```

+ Patikrinam, ar Truffle buvo sėkmigai įdiegtas.
```
C:\Users\JV>truffle version
Truffle v5.11.5 (core: 5.11.5)
Ganache v7.9.1
Solidity v0.5.16 (solc-js)
Node v18.20.5
Web3.js v1.10.0      
```
### MetaMask diegimas

1. ,,Chrome" internetinėje parduotuvėje įsidiegiau MetaMask.

<img src="https://github.com/user-attachments/assets/27b795e7-bd78-4e45-acf9-0d6ac020fdba" alt="Vaizdas" width="600"/>


2. Svarbu ,,Extensions" sklityje patikrinti, ar MetaMask yra enabled.

<img src="https://github.com/user-attachments/assets/3d05c241-69d3-4210-84d5-2832d01c99de" alt="Vaizdas" width="600"/>

### Ganache diegimas

1. https://archive.trufflesuite.com/ganache/ parsisiunčiame

<img src="https://github.com/user-attachments/assets/16b87dc7-ecde-47ee-960b-2aa66cdc8ae7" alt="Vaizdas" width="600"/>

## ATLIKTOS UŽDUOTYS

### 1. Išmaniosios sutarties verslo modelio logika

Nusprendžiau naudoti **(B2C (Business to Consumer))** verslo modelį - įmonės prekiauja tiesiogiai su vartotojais.

Taigi sukūriau „Jovi Store“. Jovi store tai internetinė parduotuvė, kurioje galima įsigyti aukščiausios kokybės, rankų darbo papuošalų, žvakių, smilkalų bei prekių namams.

**Dalyvaujančios šalys:**

+ Pirkėjas: Išsirenka prekę ir atlieka mokėjimą.

+ Pardavėjas (Jovi Store): Teikia prekes ir užtikrina aukštą aptarnavimo kokybę.

+ Kurjeris: Atsakingas už prekių pristatymą pirkėjui.

**Išmanioji sutartis:**

+ Automatizuoja užsakymo vykdymą ir mokėjimo procesą.

+ Užtikrina, kad prekės bus pristatytos tik gavus apmokėjimą.

+ Sekama užsakymo būsena (gamyba, išsiuntimas, pristatymas).

**Logika**

+ Pirkėjas pateikia užsakymą ir atlieka mokėjimą per išmaniąją sutartį.
  
+ Pardavėjas gauna užsakymą ir pradeda vykdymą.
  
+ Kai prekė perduodama kurjeriui, sutartis seka jos pristatymo eigą.
  
Po pristatymo lėšos išleidžiamos pardavėjui, užtikrinant pirkėjo ir pardavėjo saugumą.

### 2.  Verslo logika išmanioje sutartyje Solidyti kalba.

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract JoviStore {
    address public seller;
    address public buyer;
    address public courier;
    uint public price;
    bool public paid = false;
    bool public delivered = false;

    constructor(address _seller, address _buyer, uint _price) {
        require(_seller != address(0), "Seller address cannot be zero");
        require(_buyer != address(0), "Buyer address cannot be zero");
        require(_price > 0, "Price must be greater than zero");

        seller = _seller;
        buyer = _buyer;
        price = _price;
    }

    function pay() public payable {
        require(msg.sender == buyer, "Only the buyer can pay");
        require(msg.value == price, "Incorrect payment amount");
        require(!paid, "Payment already made");

        paid = true;
    }

    function assignCourier(address _courier) public {
        require(msg.sender == seller, "Only seller can assign a courier");
        require(_courier != address(0), "Courier address cannot be zero");

        courier = _courier;
    }

    function confirmDelivery() public {
        require(msg.sender == courier, "Only the courier can confirm delivery");
        require(paid, "Payment has not been made");

        delivered = true;
    }

    function releasePayment() public {
        require(msg.sender == seller, "Only the seller can release payment");
        require(paid, "Payment has not been made");
        require(delivered, "Goods have not been delivered");

        payable(seller).transfer(price);
    }
}

```
**Funkcijos:**

+ Apmokėjimas: Pirkėjas gali atlikti mokėjimą tik tada, kai jis pateikia teisingą sumą, o mokėjimas pažymimas kaip atliktas.

+ Kurjerio priskyrimas: Pardavėjas gali priskirti kurjerį.

+ Pristatymo patvirtinimas: Kurjeris patvirtina, kad pristatymas įvyko.

+ Mokėjimo atlaisvinimas: Pardavėjas gauna mokėjimą, jei pristatymas patvirtintas.


### 3. Išmaniosios sutarties testavimas

**Ethereum lokaliame tinkle (Ganache):**

1. CMD norimoje kompiuterio vietoje susikūriau naują projektą.

```
truffle init
```

2. Pasirinktame aplankale atsirado 3 failai: contracts, migrations, test. Juose sukūriau šiuos failus:

**Contracts:** JoviStore.sol, Migrations.sol

<img src="https://github.com/user-attachments/assets/87a500a9-642b-4408-b252-1664ce4370e6" alt="Vaizdas" width="600"/>


**Migrations** 1_initial_migration.js, 2_deploy_contracts.js

<img src="https://github.com/user-attachments/assets/1299cd41-1418-45d1-87f6-6fa22d680fdc" alt="Vaizdas" width="600"/>


**Test** myContract.test.js

<img src="https://github.com/user-attachments/assets/11e6f9f5-acce-4354-9802-3b2f34c6b0a7" alt="Vaizdas" width="600"/>

**Apie failus**

*JoviStore.sol:*

+ Tai išmaniosios sutarties failas, parašytas Solidity kalba.

+ Veikia kaip pagrindinė „blockchain“ aplikacijos logikos dalis.

  
*Migrations.sol:*

+ Tai pagalbinė sutartis, naudojama „Truffle“ diegimo valdymui.
  
+ Sekama, kurios migracijos jau atliktos, kad būtų išvengta pasikartojimų.

  
*1_initial_migration.js:*

+ Atsakingas už „Migrations“ sutarties diegimą.

+ Pirmasis žingsnis migracijų procese, užtikrinantis, kad migracijų valdymas yra inicijuotas.

  
*2_deploy_contracts.js:*

+ Naudojamas „JoviStore“ sutarties diegimui į „blockchain“ tinklą.

+ Apima adresų ir parametrų perdavimą sutarties konstruktoriui.

  
*myContract.test.js:*

+ *Testavimo failas*, parašytas „JavaScript“, skirtas „Truffle“ testavimo sistemai.

+ Patikrina išmaniosios sutarties funkcionalumą, pvz., apmokėjimą, kurjerio priskyrimą ir mokėjimo atlaisvinimą.

3. Atliekamas migracijos procesas, kuriame diegiamos išmaniosios sutartys.

```
truffle migrate --network development --reset
```

Gaunama:

```
C:\Users\JV\smart_contract>truffle migrate --network development --reset

Compiling your contracts...
√ Fetching solc version list from solc-bin. Attempt #1
√ Downloading compiler. Attempt #1.
> Compiling .\contracts\JoviStore.sol
> Compiling .\contracts\Migrations.sol
> Artifacts written to C:\Users\JV\smart_contract\build\contracts
> Compiled successfully using:
   - solc: 0.8.13+commit.abaa5c0e.Emscripten.clang


Starting migrations...
======================
> Network name:    'development'
> Network id:      1337
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================
Deploying Migrations...

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xe52facb76b91a5ef84b669a53485a3dad2d407842967dc26de23ea5ce1c04518
   > Blocks: 0            Seconds: 0
   > contract address:    0x923b1F24378A96e1b245962b6606195671f821f6
   > block number:        6
   > block timestamp:     1733770792
   > account:             0x13d70Da74EC590e57cD25a1fcfd75257FE91D477
   > balance:             99.4572394
   > gas used:            250130 (0x3d112)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0050026 ETH

Migrations deployed successfully.
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0050026 ETH


2_deploy_contracts.js
=====================

   Deploying 'JoviStore'
   ---------------------
   > transaction hash:    0x148b6bc446e88538d379fad7cf3139e61c1148fe40e1e494c91ff39217248c7c
   > Blocks: 0            Seconds: 0
   > contract address:    0x693D28d3912ec8a1704AA9d398e9447e178A7142
   > block number:        8
   > block timestamp:     1733770792
   > account:             0x13d70Da74EC590e57cD25a1fcfd75257FE91D477
   > balance:             99.4390458
   > gas used:            863767 (0xd2e17)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01727534 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.01727534 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.02227794 ETH

```

**- - - - - - - - - - - - - - -**

Šiame etape ilgam užstrigau su klaida:

```
C:\Users\JV\smart_contract>truffle migrate --network development --reset

Compiling your contracts...
===========================
> Compiling .\contracts\JoviStore.sol
> Compiling .\contracts\Migrations.sol
> Artifacts written to C:\Users\JV\smart_contract\build\contracts
> Compiled successfully using:
   - solc: 0.8.21+commit.d9974bed.Emscripten.clang


Starting migrations...
======================
> Network name:    'development'
> Network id:      1337
> Block gas limit: 6721975 (0x6691b7)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
 *** Deployment Failed ***

"Migrations" hit an invalid opcode while deploying. Try:
   * Verifying that your constructor params satisfy all assert conditions.
   * Verifying your constructor code doesn't access an array out of bounds.
   * Adding reason strings to your assert statements.


Exiting: Review successful transactions manually by checking the transaction hashes above on Etherscan.


Error:  *** Deployment Failed ***

"Migrations" hit an invalid opcode while deploying. Try:
   * Verifying that your constructor params satisfy all assert conditions.
   * Verifying your constructor code doesn't access an array out of bounds.
   * Adding reason strings to your assert statements.

    at C:\Users\JV\AppData\Roaming\nvm\v18.20.5\node_modules\truffle\build\webpack:\packages\deployer\src\deployment.js:330:1
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
Truffle v5.11.5 (core: 5.11.5)
Node v18.20.5
```

Išbandžiau skirtingus dalykus, tačiau internete radau, jog kiti žmonės irgi buvo susidūrę su šia klaida.

Reikėjo truffle-config.js faile solc versiją pakeisti į 0.8.13 iš 0.8.21

```
compilers: {
    solc: {
      version: "0.8.13"
    }
  }
```
**- - - - - - - - - - - - - - -**

4. 

**SVARBU**
+ Naudojami adresai, kuriuos priskiriam, turi būti paimti iš "Ganache", o "Ganache" galima susieti su "MetaLab".

+ truffle-config.js reikia susieti su "Ganache" nustatymais.
  
networks: {
  development: {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*", // Match any network id
  }
}

**Ethereum testiniame tinkle ():**

### 4. Išmaniosios sutarties vykdymo "logų" peržiūra, naudojant Ethereum testinį tinklą Etherscan

### 5. Decentralizuotos aplikacijos Front-End'as (tinklapis), įgalinantis bendradarbiavimą su išmaniąja sutartimi
