/**
 * Metabolic Health & Webinar Booking Utility Functions
 * Pure calculation logic decoupled from React DOM
 */

export interface AssessmentAnswers {
  hba1cRange: 'normal' | 'prediabetes' | 'diabetes' | 'unknown';
  afternoonCrash: boolean;
  waistAboveThreshold: boolean; // Men > 90cm / Women > 80cm
  familyHistory: boolean;
  stubbornWeight: boolean;
}

export interface AssessmentResult {
  score: number; // 0 to 100
  riskCategory: 'Low' | 'Moderate' | 'High' | 'Severe';
  insulinResistanceLikelihood: 'Low' | 'Likely' | 'High';
  priorityPillars: string[];
  recommendation: string;
}

export function calculateMetabolicRisk(answers: AssessmentAnswers): AssessmentResult {
  let score = 0;

  // HbA1c weight
  switch (answers.hba1cRange) {
    case 'diabetes':
      score += 40;
      break;
    case 'prediabetes':
      score += 25;
      break;
    case 'unknown':
      score += 15;
      break;
    case 'normal':
      score += 0;
      break;
  }

  if (answers.waistAboveThreshold) score += 20;
  if (answers.afternoonCrash) score += 15;
  if (answers.stubbornWeight) score += 15;
  if (answers.familyHistory) score += 10;

  let riskCategory: AssessmentResult['riskCategory'] = 'Low';
  let insulinResistanceLikelihood: AssessmentResult['insulinResistanceLikelihood'] = 'Low';
  let recommendation = '';
  const priorityPillars: string[] = [];

  if (score >= 60) {
    riskCategory = 'Severe';
    insulinResistanceLikelihood = 'High';
    priorityPillars.push('Nutrition', 'Gut Health', 'Movement');
    recommendation =
      'Significant insulin resistance indicators detected. Dt. Devyani’s blueprint will show you immediate dietary shifts to stabilize blood sugar without starvation.';
  } else if (score >= 40) {
    riskCategory = 'High';
    insulinResistanceLikelihood = 'High';
    priorityPillars.push('Nutrition', 'Stress & Sleep', 'Mindset');
    recommendation =
      'Notable metabolic distress indicators present. Attending this masterclass will help you arrest progression and reset cellular insulin response.';
  } else if (score >= 20) {
    riskCategory = 'Moderate';
    insulinResistanceLikelihood = 'Likely';
    priorityPillars.push('Nutrition', 'Movement', 'Stress & Sleep');
    recommendation =
      'Early metabolic flags detected (fatigue/visceral accumulation). Ideal time to optimize daily habits before clinical markers rise.';
  } else {
    riskCategory = 'Low';
    insulinResistanceLikelihood = 'Low';
    priorityPillars.push('Mindset', 'Movement', 'Gut Health');
    recommendation =
      'Healthy baseline! The masterclass will provide advanced longevity and sustainable nutrition strategies for lifetime vitality.';
  }

  return {
    score: Math.min(score, 100),
    riskCategory,
    insulinResistanceLikelihood,
    priorityPillars,
    recommendation,
  };
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  sessionDate: string;
  primaryConcern: string;
}

export function validateBookingForm(data: BookingFormData): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address';
  }

  const cleanPhone = data.phone.replace(/[\s\-\(\)\+]/g, '');
  if (!cleanPhone || cleanPhone.length < 9) {
    errors.phone = 'Please provide a valid phone number (at least 9 digits)';
  }

  if (!data.sessionDate) {
    errors.sessionDate = 'Please select a preferred webinar slot';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateBookingPass(fullName: string, sessionDate: string): { ticketId: string; qrSeed: string } {
  const clean = fullName.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 3) || 'MET';
  const randomCode = Math.floor(1000 + Math.random() * 9000);
  const ticketId = `MA-${clean}-${randomCode}`;
  const qrSeed = `https://metabolicacademy.org/verify?ticket=${ticketId}&session=${encodeURIComponent(sessionDate)}`;
  return { ticketId, qrSeed };
}
