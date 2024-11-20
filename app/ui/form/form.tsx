'use client';

import { useCallback, useEffect, useState } from 'react';
import { cloneDeep, isEmpty, isNil } from 'lodash';
import type { Question, Section } from '../../models';
import { sectionData } from '../../lib/placeholder-data';
import FormSection from './formSection';
import OrderChangeType from '@/app/types/orderChangeType';

type FormProps = {
  isEditMode: boolean;
};

function Form({ isEditMode }: FormProps) {
  // Ideally this will probably use Redux or something similar
  // if we get complicated enough with the form interactions
  // but for now just a state property is fine.
  const [sectionList, setSectionList] = useState<Section[]>([]);
  const [averageScore, setAverageScore] = useState<number>(0);

  // initial componentDidMount
  useEffect(() => {
    if (isEmpty(sectionList)) {
      setSectionList(cloneDeep(sectionData));
    }
  }, []);

  // I'm sure all of these can be done in a prettier fashion
  // with clever use of spread operators, but I'm focusing on
  // functionality in the time frame I have

  // handle question check updates
  const onChangeQuestionValue = useCallback(
    (q: Question) => {
      const section = sectionList.find((section) => section.id === q.sectionId);
      const question = section?.questions?.find(
        (question) => question.id === q.id
      );
      if (question) {
        question.value = q.value;
      }

      setSectionList(sectionList);

      calculateAverageScore();
    },
    [sectionList]
  );

  // handle question comments updates
  const onChangeQuestionComments = useCallback(
    (q: Question) => {
      const section = sectionList.find((section) => section.id === q.sectionId);
      const question = section?.questions?.find(
        (question) => question.id === q.id
      );
      if (question) {
        question.comments = q.comments;
      }

      setSectionList(sectionList);

      calculateAverageScore();
    },
    [sectionList]
  );

  // handle section title changes
  const onChangeSectionTitle = useCallback(
    (s: Section) => {
      const section = sectionList.find((section) => section.id === s.id);
      if (section) {
        section.title = s.title;
      }

      setSectionList(sectionList);
    },
    [sectionList]
  );

  const onChangeQuestionLabel = useCallback(
    (q: Question) => {
      const section = sectionList.find((section) => section.id === q.sectionId);
      const question = section?.questions?.find(
        (question) => question.id === q.id
      );
      if (question) {
        question.label = q.label;
      }

      setSectionList(sectionList);

      calculateAverageScore();
    },
    [sectionList]
  );

  // doesn't trigger a re-render and I can't remember why
  // usestate updates are supposed to cause re-renders, but
  // it won't update the list of questions until you hit save
  // even though the order does actually change internally
  const onChangeQuestionOrder = useCallback(
    (q: Question, changeType: OrderChangeType) => {
      const section = sectionList.find((section) => section.id === q.sectionId);
      const question = section?.questions?.find((qf) => qf.id === q.id);

      if (question) {
        const questionLength = section?.questions?.length ?? 0;

        if (changeType == OrderChangeType.Increment) {
          let nextQuestion = section?.questions?.find(
            (qf) => qf.order === question.order + 1
          );

          question.order += question.order === questionLength ? 0 : 1;

          if (nextQuestion) {
            nextQuestion.order -= 1;
          }
        } else {
          let prevQuestion = section?.questions?.find(
            (qf) => qf.order === question.order - 1
          );

          question.order -= question.order === 0 ? 0 : 1;

          if (prevQuestion) {
            prevQuestion.order += 1;
          }
        }
      }

      setSectionList(sectionList);
    },
    [sectionList]
  );

  // recalculate the average score
  // could probably refactor this away from a state value
  // since we're already storing the sections but
  // this is easiest for expediency
  const calculateAverageScore = () => {
    let average = 0;
    let count = 0;

    // there might be a clever way to do this with
    // reduce() or something similar but I'm just going
    // for basic functionality and time
    sectionList.forEach((section) => {
      count += section.questions?.length ?? 0;

      section.questions?.forEach((question) => {
        average += isNil(question.value) || !question.value ? 0 : 1;
      });
    });

    setAverageScore(Math.round((average / count) * 100));
  };

  return isEditMode ? (
    <form>
      {sectionList
        ?.sort((a, b) => a.order - b.order)
        .map((section) => (
          <FormSection
            isEditMode
            key={`section-${section.id}`}
            onChangeQuestionComments={onChangeQuestionComments}
            onChangeQuestionOrder={onChangeQuestionOrder}
            onChangeQuestionLabel={onChangeQuestionLabel}
            onChangeQuestionValue={onChangeQuestionValue}
            onChangeSectionTitle={onChangeSectionTitle}
            section={section}
          />
        ))}
    </form>
  ) : (
    <div>
      <div className="flex items-center py-4 border-y-2 border-y-stone-100 mb-8">
        <div
          className={`text-white px-4 mr-2 hidden print:block ${
            averageScore < 33
              ? 'bg-red-500'
              : averageScore < 66
              ? 'bg-yellow-500'
              : 'bg-green-500'
          }`}
        >{`${averageScore}%`}</div>
        <div>
          <span className="font-bold">Overall Cyber Insurability Score: </span>
          <span>{`${averageScore}% - ${
            averageScore < 33 ? 'Low' : averageScore < 66 ? 'Moderate' : 'High'
          }`}</span>
        </div>
      </div>
      <form>
        {sectionList
          ?.sort((a, b) => a.order - b.order)
          .map((section) => (
            <FormSection
              isEditMode={isEditMode}
              key={`section-${section.id}`}
              onChangeQuestionComments={onChangeQuestionComments}
              onChangeQuestionLabel={onChangeQuestionLabel}
              onChangeQuestionOrder={onChangeQuestionOrder}
              onChangeQuestionValue={onChangeQuestionValue}
              onChangeSectionTitle={onChangeSectionTitle}
              section={section}
            />
          ))}
      </form>
      <div className="flex items-center py-4 border-y-2 border-y-stone-100 mb-8">
        <div
          className={`text-white px-4 mr-2 hidden print:block ${
            averageScore < 33
              ? 'bg-red-500'
              : averageScore < 66
              ? 'bg-yellow-500'
              : 'bg-green-500'
          }`}
        >{`${averageScore}%`}</div>
        <div>
          <span className="font-bold">Overall Cyber Insurability Score: </span>
          <span>{`${averageScore}% - ${
            averageScore < 33 ? 'Low' : averageScore < 66 ? 'Moderate' : 'High'
          }`}</span>
        </div>
      </div>
    </div>
  );
}

export default Form;
