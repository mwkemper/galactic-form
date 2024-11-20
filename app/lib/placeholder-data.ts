import { cloneDeep } from 'lodash';
import type { Question, Section } from '../models';

// Placeholder for the question list. This will eventually
// probably come from a DB, but for now we'll just hard code it
export const questionData: Question[] = [
    {
        comments: '',
        id: 0,
        label: 'Do you manage privileged accounts using a privileged access management software (PAM)?',
        order: 0,
        sectionId: 0,
    },
    {
        comments: '',
        id: 1,
        label: 'If a PAM solution is deployed, is it accessible in a "check-in/out" model?',
        order: 1,
        sectionId: 0,
    },
    {
        comments: '',
        id: 2,
        label: 'Do you use MFA to protect all local and remote access to privileged user accounts?',
        order: 2,
        sectionId: 0,
    },
    {
        comments: '',
        id: 3,
        label: 'Do you manage privileged accounts using a privileged access management software (PAM)?',
        order: 3,
        sectionId: 0,
    },
    {
        comments: '',
        id: 4,
        label: 'If a PAM solution is deployed, is it accessible in a "check-in/out" model?',
        order: 4,
        sectionId: 0,
    },
    {
        comments: '',
        id: 5,
        label: 'Do you use MFA to protect all local and remote access to privileged user accounts?',
        order: 5,
        sectionId: 0,
    },
    {
        comments: '',
        id: 10,
        label: 'Do you manage privileged accounts using a privileged access management software (PAM)?',
        order: 0,
        sectionId: 1,
    },
    {
        comments: '',
        id: 11,
        label: 'If a PAM solution is deployed, is it accessible in a "check-in/out" model?',
        order: 1,
        sectionId: 1,
    },
    {
        comments: '',
        id: 12,
        label: 'Do you use MFA to protect all local and remote access to privileged user accounts?',
        order: 2,
        sectionId: 1,
    },
    {
        comments: '',
        id: 13,
        label: 'Do you manage privileged accounts using a privileged access management software (PAM)?',
        order: 3,
        sectionId: 1,
    },
    {
        comments: '',
        id: 14,
        label: 'If a PAM solution is deployed, is it accessible in a "check-in/out" model?',
        order: 4,
        sectionId: 1,
    },
    {
        comments: '',
        id: 15,
        label: 'Do you use MFA to protect all local and remote access to privileged user accounts?',
        order: 5,
        sectionId: 1,
    },
];

// Placeholder for the section list. This will eventually
// probably come from a DB, but for now we'll just hard code it
export const sectionData: Section[] = [
    {
        id: 0,
        order: 0,
        questions: cloneDeep(questionData.filter((q) => q.sectionId === 0) /* I know you can shorthand these but readability is better */),
        title: 'Section One',
    },
    {
        id: 1,
        order: 1,
        questions: cloneDeep(questionData.filter((q) => q.sectionId === 1)),
        title: 'Section Two',
    },
];