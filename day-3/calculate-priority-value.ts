const CAPITAL_BASE_CHAR_CODE_VALUE = 64;
const LOWERCASE_BASE_CHAR_CODE_VALUE = 96;
const CAPITAL_LETTER_OFFSET = 26;

export function calculatePriorityValue(allOverlaps: string[]): number {
  const result = allOverlaps
    .map(calculateOneLetterPriorityValue)
    .reduce((acc, value) => acc + value, 0);

  return result;
}

function calculateOneLetterPriorityValue(letter: string): number {
  const charCode = letter.charCodeAt(0);
  if (charCode <= 90) {
    const value =
      charCode - CAPITAL_BASE_CHAR_CODE_VALUE + CAPITAL_LETTER_OFFSET;
    return value;
  }

  const value = charCode - LOWERCASE_BASE_CHAR_CODE_VALUE;
  return value;
}
