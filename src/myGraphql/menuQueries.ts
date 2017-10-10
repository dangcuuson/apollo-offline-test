import { gql } from 'react-apollo';

export const MENU_QUERY = gql`
query CoursesQuery {
  JuniorMaths {
    name
    levels {
      name
      exercises {
        id
        name
      }
    }
  }

  PrimaryMaths {
    name
    levels {
      name
      subjects {
        name
        exercises {
          id
          name
          type
        }
      }
    }
  }
}
`;

export interface MenuQueryResponse {
  JuniorMaths: JMCourse;
  PrimaryMaths: PMCourse;
}

// JM Menu types
export interface JMCourse {
    name: string;
    levels: JMLevel[];
}

export interface JMLevel {
    name: string;
    exercises: JMExercise[];
}

export interface JMExercise {
    id: string;
    name: string;
}

// PM Menu types
export interface PMCourse {
    name: string;
    subjects: PMSubject[];
}

export interface PMSubject {
    name: string;
    exercises: PMExercise[];
}

export interface PMExercise {
    id: string;
    name: string;
    type: string;
}