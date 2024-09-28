import { useEffect } from 'react';

import { useWPAjax, useWPOptionQuery } from '../../../react-utils/hooks';

const usePremiumInEditor = () => {
	const { data: bpltpUtils } = useWPOptionQuery('bpltpUtils');
	const { data = null, refetch, isLoading = true } = useWPAjax('bpltpPremiumChecker', { _wpnonce: bpltpUtils?.nonce }, true);
	const isPremium = (!isLoading && data?.isPipe) || false;

	useEffect(() => {
		refetch();
	}, [bpltpUtils]);

	return { isPremium, isLoading };
};
export default usePremiumInEditor;