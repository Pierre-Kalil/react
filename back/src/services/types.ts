export interface DataLoginProps {
  email: string;
  password: string;
}

export interface DataRecordProps {
  id: string;
  userId: string;
  subject: {
    problem: string[];
    situation: boolean;
    comments: string;
  };
  object: {
    problem: string[];
    situation: boolean;
    comments: string;
  };
  assessment: {
    problem: string[];
    situation: boolean;
    comments: string;
  };
  plan: {
    problem: string[];
    situation: boolean;
    comments: string;
  };
}
