//Slightly modified version of a paginator from this thread:
//https://gist.github.com/kottenator/9d936eb3e4e3c3e02598?permalink_comment_id=3238804#gistcomment-3238804

const getRange = (start: number, end: number) => {
  return new Array(end - start + 1).fill(0).map((v, index) => index + start);
};

export const getPageCount = (total: number, rowsPerPage: number) => {
  return Math.ceil(total / rowsPerPage);
};

/**
 * Returns a paginator of an Array of numbers and "..." that will be used for pagination.
 * [1, 2, 3, 4, 5, "...", 12]
 * [1, "...", 6, 7, 8, "...", 12]
 * [1, "...", 8, 9, 10, 11, 12]
 * @param {number} currentPage
 * @param {number} pageCount
 * @return {(string | number)[]} the pagination array.
 */
export const pagination = (
  currentPage: number,
  pageCount: number
): (string | number)[] => {
  let delta: number;
  if (pageCount <= 7) {
    // delta === 7: [1 2 3 4 5 6 7]
    delta = 7;
  } else {
    // delta === 2: [1 ... 4 5 6 ... 10]
    // delta === 4: [1 2 3 4 5 ... 10]
    delta = currentPage > 4 && currentPage < pageCount - 3 ? 2 : 4;
  }

  const range = {
    start: Math.round(currentPage - delta / 2),
    end: Math.round(currentPage + delta / 2),
  };

  if (range.start - 1 === 1 || range.end + 1 === pageCount) {
    range.start += 1;
    range.end += 1;
  }

  let pages: (string | number)[] =
    currentPage > delta
      ? getRange(
        Math.min(range.start, pageCount - delta),
        Math.min(range.end, pageCount)
      )
      : getRange(1, Math.min(pageCount, delta + 1));

  const withDots = (value: number, pair: (number | string)[]) =>
    pages.length + 1 === pageCount ? [value] : pair;

  if (pages[0] !== 1) {
    pages = withDots(1, [1, '...']).concat(pages);
  }

  if (pages[pages.length - 1] < pageCount) {
    pages = pages.concat(withDots(pageCount, ['...', pageCount]));
  }
  return pages;
};
