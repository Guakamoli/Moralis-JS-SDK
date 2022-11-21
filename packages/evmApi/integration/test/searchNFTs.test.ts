import { MoralisEvmApi } from '../../src/EvmApi';
import { cleanEvmApi2, setupEvmApi2 } from '../setup';

describe('searchNFTs', () => {
  let EvmApi: MoralisEvmApi;

  beforeAll(() => {
    EvmApi = setupEvmApi2();
  });

  afterAll(() => {
    cleanEvmApi2();
  });

  describe('Search NFTs', () => {
    it('should get NFTs that match a given metadata search query', async () => {
      const result = await EvmApi.nft.searchNFTs({
        q: '889',
      });
      expect(result).toBeDefined();
      expect(result).toEqual(expect.objectContaining({}));
    });

    it('should throw an error when an invalid search parameter is provided', async () => {
      expect(
        EvmApi.nft.searchNFTs({
          q: 'Pancake',
        }),
      ).rejects.toThrowError('[C0005] Invalid search parameter provided');
    });
  });
});
