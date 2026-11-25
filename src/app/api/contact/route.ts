import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const CONCERN_LABELS: Record<string, string> = {
  blood_sugar: 'Lowering High Fasting / Post-meal Blood Sugar',
  weight_management: 'Managing Stubborn Belly Fat & Weight',
  medicine_reduction: 'Reducing Reliance on Daily Diabetic Medications',
  diet_confusion: 'Overcoming Diet Confusion with Sustainable Habits',
  preventive: 'Preventive Health (Family History of Diabetes)',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate required fields from BookingModal
    const {
      fullName,
      name,
      email,
      phone,
      sessionDate,
      primaryConcern,
      ticketId,
    } = body as {
      fullName?: string;
      name?: string;
      email?: string;
      phone?: string;
      sessionDate?: string;
      primaryConcern?: string;
      ticketId?: string;
    };

    const resolvedName = (fullName || name || '').trim();
    const resolvedEmail = (email || '').trim();

    if (!resolvedName || !resolvedEmail) {
      return NextResponse.json(
        { error: 'Full name and email address are required.' },
        { status: 400 }
      );
    }

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.error(
        '[Google Sheets API Error]: Missing GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, or GOOGLE_SHEET_ID environment variables.'
      );
      return NextResponse.json(
        { error: 'Google Sheets configuration is incomplete. Please contact support.' },
        { status: 500 }
      );
    }

    // 2. Authenticate with Google using Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // 3. Append a new row to the Google Sheet
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
    });
    const concernLabel = primaryConcern
      ? CONCERN_LABELS[primaryConcern] || primaryConcern
      : '—';

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:G',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            timestamp,
            resolvedName,
            resolvedEmail,
            phone?.trim() || '—',
            sessionDate?.trim() || '—',
            concernLabel,
            ticketId?.trim() || '—',
          ],
        ],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('[Google Sheets API Error]:', message);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}
