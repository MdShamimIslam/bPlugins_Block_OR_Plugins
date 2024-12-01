import { useEffect } from 'react';

import { useWPAjax, useWPOptionQuery } from '../../../react-utils/hooks';

const usePremiumInEditor = () => {
	const { data: bpmpUtils } = useWPOptionQuery('bpmpUtils');
	const { data = null, refetch, isLoading = true } = useWPAjax('bpmpPremiumChecker', { _wpnonce: bpmpUtils?.nonce }, true);
	const isPremium = (!isLoading && data?.isPipe) || false;

	useEffect(() => {
		refetch();
	}, [bpmpUtils]);

	return { isPremium, isLoading };
};
export default usePremiumInEditor;