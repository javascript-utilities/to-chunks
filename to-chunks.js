"use strict";
/**
 * Chunks input into array based on listed separators
 * @param {number | string} input - String like input to chunk up
 * @param {RegExp | string} regular_expression - Regular expression to separate input by
 * @author S0AndS0
 * @license AGPL-3.0
 * @example
 *   const chunks = toChunks('1.15.4-2Beta', '\\.|-|[a-zA-Z]+');
 *   console.log(chunks);
 *   //> ['1', '.', '15', '.', '4', '-', '2', 'Beta']
 */
function toChunks(input, regular_expression) {
    input = String(input);
    if (!(regular_expression instanceof RegExp)) {
        regular_expression = new RegExp(regular_expression);
    }
    const chunks = [];
    while (input.length > 0) {
        const match = input.match(regular_expression);
        if (match === null) {
            chunks.push(input);
            input = '';
        }
        else {
            const matched_characters = match[0];
            const before_match = input.split(matched_characters)[0];
            const after_match = input.slice(match.index + match[0].length);
            if (before_match.length > 0) {
                chunks.push(before_match);
            }
            chunks.push(matched_characters);
            input = after_match;
        }
    }
    return chunks;
}
/* istanbul ignore next */
if (typeof module !== 'undefined') {
    module.exports = toChunks;
}
