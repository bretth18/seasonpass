# seasonpass

seasonpass is an ERC-721 "season pass" NFT for token gated communities/DAO's.

this project environment is currently configured with hardhat & typescript. 



## installation

1. git clone the repository on your local machine:
```bash
git clone https://github.com/bretth18/seasonpass
```
2. cd into the repo and install dependencies
```bash
cd seasonpass 
```
```bash
yarn install
```
3. create a ```.env``` file in your root directory. an example is located at [.env-example](.env-example)



## usage
```bash
npx hardhat 
```

### deploying contracts

this repository is configured for use with `hardhat-deploy`.
see the deploy scripts in [./deploy](./deploy) for examples.

to deploy contracts:
```bash
npx hardhat --network localhost deploy
```
`localhost` deploys to the local hardhat network on your machine.


### tests

unit tests are located in [./test](./test)
tests are written with mocha + chai.



## roadmap
todo.



## contributing

pull requests are welcome. for major changes, please open an issue first to discuss what you would like to change.

please make sure to update tests as appropriate.



## license
[MIT](LICENSE)



