import { parse } from 'query-string';
import LS from '../helpers/storageHelpers';

const useQuery = () => {
  const { perPage, page, origin = '', prices = '' } = parse(LS.get('filterQS'));
  const price = prices.split(',');
  const min = Number(price[0]);
  const max = Number(price[1]);
  const priceRange = [min, max];
  const origins = origin.length > 0 ? origin.split(',') : [];

  return [perPage, page, priceRange, origins];
};

export default useQuery;
