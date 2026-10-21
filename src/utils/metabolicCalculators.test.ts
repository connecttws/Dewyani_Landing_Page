import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateMetabolicRisk, validateBookingForm, generateBookingPass } from './metabolicCalculators';

test('calculateMetabolicRisk returns Severe for multiple risk factors', () => {
  const result = calculateMetabolicRisk({
    hba1cRange: 'diabetes',
    afternoonCrash: true,
    waistAboveThreshold: true,
    familyHistory: true,
    stubbornWeight: true,
  });

  assert.equal(result.riskCategory, 'Severe');
  assert.equal(result.insulinResistanceLikelihood, 'High');
  assert.equal(result.score >= 60, true);
  assert.equal(result.priorityPillars.includes('Nutrition'), true);
});

test('calculateMetabolicRisk returns Low for healthy baseline', () => {
  const result = calculateMetabolicRisk({
    hba1cRange: 'normal',
    afternoonCrash: false,
    waistAboveThreshold: false,
    familyHistory: false,
    stubbornWeight: false,
  });

  assert.equal(result.riskCategory, 'Low');
  assert.equal(result.insulinResistanceLikelihood, 'Low');
  assert.equal(result.score, 0);
});

test('validateBookingForm validates correctly', () => {
  const invalid = validateBookingForm({
    fullName: '',
    email: 'invalid-email',
    phone: '123',
    sessionDate: '',
    primaryConcern: 'blood_sugar',
  });

  assert.equal(invalid.valid, false);
  assert.equal(typeof invalid.errors.fullName, 'string');
  assert.equal(typeof invalid.errors.email, 'string');
  assert.equal(typeof invalid.errors.phone, 'string');
  assert.equal(typeof invalid.errors.sessionDate, 'string');

  const valid = validateBookingForm({
    fullName: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    sessionDate: 'Sunday, 7:00 PM IST',
    primaryConcern: 'blood_sugar',
  });

  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('generateBookingPass formats standard ticket ID', () => {
  const pass = generateBookingPass('Devyani Arbat', 'Sunday, 7:00 PM IST');
  assert.equal(pass.ticketId.startsWith('MA-DEV-'), true);
  assert.equal(pass.qrSeed.includes('Sunday'), true);
});
