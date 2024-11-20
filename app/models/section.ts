// Interface model for Sections. Will also likely be stored in a DB
// somewhere so interfaces seem to make the most sense.
import Question from './question';

interface Section {
    id?: number;
    questions?: Question[];
    order: number;
    title: string;
};

export default Section;
