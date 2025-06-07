export interface User {
  uid: string;
  email: string;
  displayName?: string;
}

export interface JobApplication {
  id: string;
  company: string;
  position: string;
  location: string;
  status: JobStatus;
  appliedDate: Date;
  jobUrl?: string;
  salary?: string;
  description?: string;
  notes?: string;
  followUpNotes: FollowUpNote[];
  createdAt: Date;
  updatedAt: Date;
}

export interface FollowUpNote {
  id: string;
  content: string;
  date: Date;
  type: 'email' | 'call' | 'interview' | 'other';
}

export type JobStatus = 
  | 'applied'
  | 'under_review'
  | 'interview_scheduled'
  | 'interviewed'
  | 'rejected'
  | 'accepted'
  | 'withdrawn';

export interface DashboardStats {
  totalApplications: number;
  applicationsThisMonth: number;
  interviewsScheduled: number;
  offersReceived: number;
  statusBreakdown: Record<JobStatus, number>;
}
