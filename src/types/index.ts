/**
 * Represents a user in the system.
 * Stored in the 'users' collection.
 */
export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  role: 'lecturer' | 'student';
  createdAt: number;
}

/**
 * Represents a specific class session.
 * Stored in the 'sessions' collection.
 */
export interface ClassSession {
  id: string;
  lecturerId: string;
  courseName: string;
  topic?: string;
  isActive: boolean;
  createdAt: number;
}

/**
 * Represents a successful scan event.
 * Stored in the 'attendance' collection.
 */
export interface AttendanceRecord {
  id: string;
  sessionId: string;
  studentId: string;
  studentName: string;
  scannedAt: number;
}
