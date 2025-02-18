# @moralisweb3/next

## 2.9.0

### Patch Changes

- [#872](https://github.com/MoralisWeb3/Moralis-JS-SDK/pull/872) [`8428ad9b5`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/8428ad9b5f370a9e8d27ff5645ef5124672be6dd) Thanks [@Y0moo](https://github.com/Y0moo)! - - Added more data fetching examples to the @moralisweb3/next's README

  - Deprecation warning for `isValidating`. It'll be replaced with `isFetching`.
  - Deprecation warning for `refetch`. It'll be replaced with `fetch`.
  - No data will be fetched if params were not provided to the hook.
  - `fetch()` function returnes a response value

- [#878](https://github.com/MoralisWeb3/Moralis-JS-SDK/pull/878) [`dcc1c3f90`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/dcc1c3f90c262f2764701fdb1c971aa3188a3cdf) Thanks [@Y0moo](https://github.com/Y0moo)! - Added paginated hooks

- Updated dependencies [[`a8c2175c2`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/a8c2175c2483d1de14af279da933ce3ddbe5f761), [`f709e1179`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/f709e117975855f81391ee173b890eb033bee5fb), [`31ef229ad`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/31ef229ad13f3c92852008103567a57bc7381c4a)]:
  - @moralisweb3/evm-api@2.9.0
  - @moralisweb3/api-utils@2.9.0
  - @moralisweb3/auth@2.9.0
  - @moralisweb3/common-auth-utils@2.9.0
  - @moralisweb3/sol-api@2.9.0
  - moralis@2.9.0

## 2.8.2

### Patch Changes

- Updated dependencies []:
  - @moralisweb3/api-utils@2.8.2
  - @moralisweb3/auth@2.8.2
  - @moralisweb3/common-auth-utils@2.8.2
  - @moralisweb3/evm-api@2.8.2
  - @moralisweb3/sol-api@2.8.2
  - moralis@2.8.2

## 2.8.1

### Patch Changes

- [#859](https://github.com/MoralisWeb3/Moralis-JS-SDK/pull/859) [`3b584866`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/3b584866114107785efd13bf1ac6ca3ebf542ff9) Thanks [@Y0moo](https://github.com/Y0moo)! - 1. No infinite rerenders when pass Moralis Datatypes to the hooks as params. 2. No unexpected challenge requests when use `requestChallengeAsync` from the challenge hooks.
- Updated dependencies []:
  - @moralisweb3/api-utils@2.8.1
  - @moralisweb3/auth@2.8.1
  - @moralisweb3/common-auth-utils@2.8.1
  - @moralisweb3/evm-api@2.8.1
  - @moralisweb3/sol-api@2.8.1
  - moralis@2.8.1

## 2.8.0

### Minor Changes

- [#846](https://github.com/MoralisWeb3/Moralis-JS-SDK/pull/846) [`1374573d`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/1374573d183d3aba0b92e313855bde7a15542f46) Thanks [@ErnoW](https://github.com/ErnoW)! - # Api responses (breaking change)

  For any api call, you get a resultAdapter response. The value of the `toJSON()` value has changed. Now it is the same value as `.raw`. Previously this caused a lot of confusion, and as both return a json. The value of this method has changed. So if you used `.toJSON()` on an api result you can:

  - Use `.result`, this will probably contain dataTypes with lots of utility functions. If you only care about the data, you can call `.format()` or `.toJSON()` on this datatype. This is the prefered way as it provides you wilt additional utilites and extra properties. We suggest you to use Typescript, to easily see the available properties/methods on these datatypes.
  - Or. use the new values (or values from `.raw`), these values are identical as they are provided by the internal api, without any data transformation. The types might be different than before, so please check this (we suggest to use Typescript, as all responses are typed, otherwise you can log the output and see any differences)

  # Package name changes (deprecated, upcomming breaking change)

  If you're using some of our internal packages @moralisweb3/core for example then these names have been changed to differentiate between server-side packages, and packages that are compatible with client-side and server-side. We name these common-\*. This is a first step to provide better client-side support:

  ## Migration guide

  - `@moralisweb3/core` -> `@moralisweb3/common-core`
  - `@moralisweb3/evm-utils` -> `@moralisweb3/common-evm-utils`
  - `@moralisweb3/sol-utils` -> `@moralisweb3/common-sol-utils`

  Change your dependencies in package.json and the corresponding imports in your code to the new names.

  For the time being, the old packages will remain, and we use them to forward to the common-\* package, this will be removed in a future version, so please update to the new package name.

  # NextJs package

  For easy integration we created a nextJs package. See `packages/next`. This contains:

  - hooks to all api endpoints
  - adapter to integrate into NextJs authentication via Moralis Auth

  For a demo check out `demos/nextjs`

  # Operation types

  The parameters and return types are now exported for every api operation. These are exported from

  - `moralis/common-evm-utils` for evm api methods
  - `moralis/common-sol-utils` for sol api methods
  - `moralis/common-auth-utils` for auth methods
  - `moralis/common-streams-utils` for streams methods

  For example:

  ```typescript
  import Moralis from 'moralis';
  import { GetContractNFTsRequest, EvmChain, GetContractNFTsResponse } from 'moralis/common-evm-utils';

  const getBlockOptions: GetContractNFTsRequest = {
    address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
    chain: EvmChain.ETHEREUM,
  };

  let result: GetContractNFTsResponse;

  const response = await Moralis.EvmApi.nft.getContractNFTs(getBlockOptions);
  result = response.result;
  ```

  # Dataytypes support in client-side projects

  As a first step to provide better client-side support, all datatypes are now usable in server-side and client-side.

### Patch Changes

- Updated dependencies [[`f1336a35`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/f1336a35fc2df2d9c7f4c1c376d0b38eb57de702), [`1374573d`](https://github.com/MoralisWeb3/Moralis-JS-SDK/commit/1374573d183d3aba0b92e313855bde7a15542f46)]:
  - @moralisweb3/api-utils@2.8.0
  - @moralisweb3/auth@2.8.0
  - @moralisweb3/evm-api@2.8.0
  - moralis@2.8.0
  - @moralisweb3/sol-api@2.8.0
  - @moralisweb3/common-auth-utils@2.8.0
