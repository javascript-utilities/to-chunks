"use strict";


/**
 * Organizes tests for `toChunks` function
 * @author S0AndS0
 * @license AGPL-3.0
 * @example
 *   const test_toChunks = new toChunks_Test();
 *   test_toChunks.runTests();
 */
class toChunks_Test {
  toChunks: Function;

  constructor() {
    this.toChunks = require('../to-chunks.js');
  }

  /**
   * Runs all tests within this class
   */
  runTests() {
    this.chunkBars();
    this.chunkVersions();
  }

  /**
   * Tests if vertical bars are chunked properly
   */
  chunkBars() {
    test('Are strings such as "4|0" chunked by "|"?', () => {
      const regular_expression = new RegExp('\\|');
      const chunks = this.toChunks('4|0', regular_expression);
      const expected = ['4', '|', '0'];
      expect(chunks).toStrictEqual(expected);
    });
  }

  /**
   * Tests if version like input are chunked as expected
   */
  chunkVersions() {
    test('Does "1.15.4-2" get chunked by "." and "-" correctly?', () => {
      const chunks = this.toChunks('1.15.4-2', '\\.|-');
      const expected = ['1', '.', '15', '.', '4', '-', '2'];
      expect(chunks).toStrictEqual(expected);
    });

    test('Will "1.15.4-2a" be chunked by ".", "-", and "[a-z]" as expected?', () => {
      const chunks = this.toChunks('1.15.4-2a', '\\.|-|[a-z]');
      const expected = ['1', '.', '15', '.', '4', '-', '2', 'a'];
      expect(chunks).toStrictEqual(expected);
    });

    test('Are words chunked from "1.15.4-2Beta" via "[a-zA-Z]+" expressions?', () => {
      const chunks = this.toChunks('1.15.4-2Beta', '\\.|-|[a-zA-Z]+');
      const expected = ['1', '.', '15', '.', '4', '-', '2', 'Beta'];
      expect(chunks).toStrictEqual(expected);
    });

    test('Can "pre1.15.4-2A" chunkify from "\\.|-|[a-zA-Z]+" expressions?', () => {
      const chunks = this.toChunks('pre1.15.4-2A', '\\.|-|[a-zA-Z]+');
      const expected = ['pre', '1', '.', '15', '.', '4', '-', '2', 'A'];
      expect(chunks).toStrictEqual(expected);
    });
  }
}


const test_toChunks = new toChunks_Test();
test_toChunks.runTests();

