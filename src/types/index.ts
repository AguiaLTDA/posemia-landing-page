export interface CourseModule {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  hours: number;
  courses: {
    title: string;
    hours: number;
    description: string;
    topics: string[];
  }[];
  project?: string;
  microcertification: string;
  question: string;
  iconName: string;
}

export interface AreaCard {
  id: string;
  title: string;
  icon: string;
  careers: string[];
}

export interface TrackData {
  id: string;
  title: string;
  icon: string;
  topics: string[];
}

export interface PracticalProject {
  id: number;
  number: string;
  title: string;
  description: string;
}

export interface TechLab {
  title: string;
  hours: number;
  description: string;
  tags: string[];
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface CourseEditableInfo {
  duration: string;
  modality: string;
  days: string;
  hours: string;
  startDate: string;
  investment: string;
  spots: string;
}
