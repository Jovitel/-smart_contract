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
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated memdown@1.4.1: Superseded by memory-level (https://github.com/Level/community#faq)
npm warn deprecated glob@7.2.0: Glob versions prior to v9 are no longer supported
npm warn deprecated deferred-leveldown@5.3.0: Superseded by abstract-level (https://github.com/Level/community#faq)
npm warn deprecated levelup@4.4.0: Superseded by abstract-level (https://github.com/Level/community#faq)
npm warn deprecated level-js@5.0.2: Superseded by browser-level (https://github.com/Level/community#faq)
npm warn deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm warn deprecated apollo-datasource@3.3.2: The `apollo-datasource` package is part of Apollo Server v2 and v3, which are now end-of-life (as of October 22nd 2023 and October 22nd 2024, respectively). See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm warn deprecated apollo-server-errors@3.3.1: The `apollo-server-errors` package is part of Apollo Server v2 and v3, which are now end-of-life (as of October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm warn deprecated testrpc@0.0.1: testrpc has been renamed to ganache-cli, please use this package from now on.
npm warn deprecated apollo-server-plugin-base@3.7.2: The `apollo-server-plugin-base` package is part of Apollo Server v2 and v3, which are now end-of-life (as of October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm warn deprecated apollo-server-types@3.8.0: The `apollo-server-types` package is part of Apollo Server v2 and v3, which are now end-of-life (as of October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm warn deprecated @truffle/promise-tracker@0.1.7: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated multibase@0.6.1: This module has been superseded by the multiformats module
npm warn deprecated apollo-server-express@3.13.0: The `apollo-server-express` package is part of Apollo Server v2 and v3, which are now end-of-life (as of October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm warn deprecated @truffle/spinners@0.2.5: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated multicodec@0.5.7: This module has been superseded by the multiformats module
npm warn deprecated @truffle/dashboard-message-bus-common@0.1.7: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated @truffle/source-map-utils@1.3.119: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated apollo-reporting-protobuf@3.4.0: The `apollo-reporting-protobuf` package is part of Apollo Server v2 and v3, which are now end-of-life (as of October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/usage-reporting-protobuf` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm warn deprecated @truffle/error@0.2.2: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated @truffle/provider@0.3.13: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated apollo-server-env@4.2.1: The `apollo-server-env` package is part of Apollo Server v2 and v3, which are now end-of-life (as of October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/utils.fetcher` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm warn deprecated @truffle/events@0.1.25: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated @truffle/dashboard-message-bus-client@0.1.12: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated @truffle/compile-common@0.9.8: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated @truffle/db-loader@0.2.36: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated apollo-server@3.13.0: The `apollo-server` package is part of Apollo Server v2 and v3, which are now end-of-life (as of October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm warn deprecated @truffle/code-utils@3.0.4: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated @truffle/interface-adapter@0.5.37: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm warn deprecated @truffle/config@1.3.61: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated multicodec@1.0.4: This module has been superseded by the multiformats module
npm warn deprecated uuid@2.0.1: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm warn deprecated multibase@0.7.0: This module has been superseded by the multiformats module
npm warn deprecated abstract-leveldown@7.2.0: Superseded by abstract-level (https://github.com/Level/community#faq)
npm warn deprecated abstract-leveldown@2.7.2: Superseded by abstract-level (https://github.com/Level/community#faq)
npm warn deprecated @truffle/abi-utils@1.0.3: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated cids@0.7.5: This module has been superseded by the multiformats module
npm warn deprecated abstract-leveldown@6.3.0: Superseded by abstract-level (https://github.com/Level/community#faq)
npm warn deprecated abstract-leveldown@6.2.3: Superseded by abstract-level (https://github.com/Level/community#faq)
npm warn deprecated abstract-leveldown@6.2.3: Superseded by abstract-level (https://github.com/Level/community#faq)
npm warn deprecated abstract-leveldown@6.2.3: Superseded by abstract-level (https://github.com/Level/community#faq)
npm warn deprecated @ensdomains/ens@0.4.5: Please use @ensdomains/ens-contracts
npm warn deprecated @ensdomains/resolver@0.2.4: Please use @ensdomains/ens-contracts
npm warn deprecated @truffle/debugger@12.1.5: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated apollo-server-core@3.13.0: The `apollo-server-core` package is part of Apollo Server v2 and v3, which are now end-of-life (as of October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
npm warn deprecated leveldown@5.6.0: Superseded by classic-level (https://github.com/Level/community#faq)
npm warn deprecated @truffle/db@2.0.36: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
npm warn deprecated @truffle/codec@0.17.3: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.

added 1159 packages in 3m
npm notice
npm notice New minor version of npm available! 10.8.2 -> 10.9.1
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.9.1
npm notice To update run: npm install -g npm@10.9.1
npm notice
```
      + Buvo daugybė pasenusių paketų su įspėjimais. Šie įspėjimai rodo, kad Truffle naudojamos bibliotekos turi senesnes ar nepalaikomas versijas. Nors šie įspėjimai nesustabdo diegimo, būtų           patartina atnaujinti šias bibliotekas į naujausias versijas, kad užtikrinti suderinamumą ir išvengti galimų problemų. Pabaigoje išvesties buvo pasiūlyta įdiegti naujausią npm versiją.

```

```
      
