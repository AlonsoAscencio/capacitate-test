
export interface User {
  email:        string;
  people:       Person[];
  inscriptions: Inscription[];
}

export interface Inscription {
  courseId:          number;
  inscripcionDate:   string;
  certificationDate: string;
  advance:           number;
  scoreCourse:       number;
  folioCertificate:  string;
  anyTest:           boolean;
  course:            Course;
  reactionId?:       number;
}

export interface Course {
  name:     string;
  imageUrl: string;
  sector:   Sector;
}

export interface Sector {
  id:         number;
  name:       string;
  colorTheme: string;
}

export interface Person {
  name:     string;
  lastName: string;
}
