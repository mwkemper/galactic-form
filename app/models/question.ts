// I think interfaces make more sense for database models
// than types. These questions will probably eventually
// be stored in a DB somewhere so we'll use interface.
interface Question {
    comments: string;
    id?: number;
    label: string;
    order: number;
    sectionId: number;
    value?: boolean;
};

export default Question;
