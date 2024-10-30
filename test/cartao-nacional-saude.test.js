import { cns, cnsDV } from '../src/generators/cartao-nacional-saude.js';
import { describe, test } from 'node:test';
import { match, strictEqual } from 'node:assert';

describe('CNS DV Calculation', () => {
  test('Validates DV calculation when mod is 10', () => {
    const cnsBase = '123456789013';
    const dv = cnsDV(cnsBase);
    strictEqual(dv.startsWith('001'), true);
  });

  test('Validates DV calculation when mod is 11', () => {
    const cnsBase = '123456789010';
    const dv = cnsDV(cnsBase);
    strictEqual(dv, '0000');
  });

  test('Validates DV calculation when mod is different from 10 and 11', () => {
    const cnsBase = '123456789014';
    const dv = cnsDV(cnsBase);
    strictEqual(dv.startsWith('000'), true);
  });
});

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
