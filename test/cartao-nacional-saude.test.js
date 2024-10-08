import { describe, test } from 'node:test';
import { strictEqual, match } from 'node:assert';
import { cns } from '../src/generators/cartao-nacional-saude.js';

describe('Brazilian National Health Card (CNS) Generator', () => {

  test('Generates CNS without mask and random type', () => {
    const result = cns(false);
    // Verifies if the result is a valid CNS with 15 digits
    strictEqual(result.length, 15);
    match(result, /^\d{15}$/);
  });

  test('Generates CNS without mask for SUS beneficiary', () => {
    const result = cns(false, 'beneficiario');
    // Verifies if the first digit is 1 or 2
    strictEqual(['1', '2'].includes(result.charAt(0)), true);
    strictEqual(result.length, 15);
    match(result, /^\d{15}$/);
  });

  test('Generates CNS without mask for healthcare professional', () => {
    const result = cns(false, 'profissional');
    // Verifies if the first digit is 7, 8, or 9
    strictEqual(['7', '8', '9'].includes(result.charAt(0)), true);
    strictEqual(result.length, 15);
    match(result, /^\d{15}$/);
  });

  test('Generates CNS with mask and random type', () => {
    const result = cns(true);
    // Verifies if the result is in the masked CNS format (XXX XXXX XXXX XXXX)
    strictEqual(result.length, 18);
    match(result, /^\d{3} \d{4} \d{4} \d{4}$/);
  });

  test('Generates CNS with mask for SUS beneficiary', () => {
    const result = cns(true, 'beneficiario');
    // Verifies if the first digit is 1 or 2
    strictEqual(['1', '2'].includes(result.charAt(0)), true);
    strictEqual(result.length, 18);
    match(result, /^\d{3} \d{4} \d{4} \d{4}$/);
  });

  test('Generates CNS with mask for healthcare professional', () => {
    const result = cns(true, 'profissional');
    // Verifies if the first digit is 7, 8, or 9
    strictEqual(['7', '8', '9'].includes(result.charAt(0)), true);
    strictEqual(result.length, 18);
    match(result, /^\d{3} \d{4} \d{4} \d{4}$/);
  });
});
