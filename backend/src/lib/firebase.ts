import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';

let initialized = false;

export function initFirebase() {
  if (initialized || admin.apps.length > 0) return;

  // Primary Method: Individual ENV variables
  if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Fixes escaped newlines from ENVs
      }),
      projectId: process.env.FIREBASE_PROJECT_ID,
    });
    initialized = true;
    return;
  }

  // Fallback: emulator or local dev without credentials
  console.warn('[Firebase] No credentials found — using emulator defaults. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY.');
  admin.initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID ?? 'quzar-io',
  });
  initialized = true;
}

import { getFirestore } from 'firebase-admin/firestore';

export function getDb() {
  return getFirestore(admin.app());
}
