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

## Truffle IDE diegimas

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
