import { fetcher } from '../../../../utils/fetcher';
import { 
  getNFTTransfersFromToBlockOperation as operation, 
  GetNFTTransfersFromToBlockRequest, 
  GetNFTTransfersFromToBlockResponse 
} from '@moralisweb3/common-evm-utils';
import { SWRConfiguration } from 'swr/dist/types';
import useSWR from 'swr';

export const useEvmNFTTransfersFromToBlock = (request: GetNFTTransfersFromToBlockRequest, SWRConfig?: SWRConfiguration) => {
  const { data, error, mutate, isValidating } = useSWR<GetNFTTransfersFromToBlockResponse>(
    ['evmApi/getNFTTransfersFromToBlock', {operation, request}], 
    fetcher, 
    {revalidateOnFocus: false, ...SWRConfig}
  );

  return {
    data,
    error,
    refetch: async () => mutate(),
    isValidating,
  };
};
