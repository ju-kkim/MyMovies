import { QUERY } from '@/constants/query';
import { myFetch } from '@/utils/fetch';

export default function useSearch() {
  async function getSearchMovie(keyword: string, resultPage = 1) {
    const encodeKeyword = encodeURIComponent(keyword);
    const { page, total_pages, results, total_results } = await myFetch({
      path: 'search/movie',
      querys: [
        { query: 'language', value: QUERY.language },
        { query: 'query', value: encodeKeyword },
        { query: 'page', value: `${resultPage}` },
        { query: 'region', value: QUERY.region },
      ],
    });

    const isLastPage = page === total_pages;

    return { page, isLastPage, results, total_results };
  }

  return { getSearchMovie };
}
