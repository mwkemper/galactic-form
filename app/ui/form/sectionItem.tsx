import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { isNil } from 'lodash';
import type { Question } from '@/app/models';
import OrderChangeType from '@/app/types/orderChangeType';

type SectionItemProps = {
  isEditMode: boolean;
  onChangeQuestionComments: (q: Question) => void;
  onChangeQuestionLabel: (q: Question) => void;
  onChangeQuestionOrder: (q: Question, changeType: OrderChangeType) => void;
  onChangeQuestionValue: (q: Question) => void;
  question: Question;
};

function SectionItem({
  isEditMode,
  onChangeQuestionComments,
  onChangeQuestionLabel,
  onChangeQuestionOrder,
  onChangeQuestionValue,
  question,
}: SectionItemProps) {
  // I'm sure there's a way to use the values for the questions
  // in the list instead of manual state values here but I don't
  // remember how off the top of my head
  const [isChecked, setIsChecked] = useState<boolean>();
  const [commentText, setCommentText] = useState<string>();
  const [questionLabel, setQuestionLabel] = useState<string>();

  const { id, order } = question;

  const onChangeQuestionChecked = (e: ChangeEvent<HTMLInputElement>) => {
    question.value = parseInt(e.target.value) === 1;

    setIsChecked(question.value);

    // bubble up so we can update the section list
    onChangeQuestionValue(question);
  };

  const onChangeCommentText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    question.comments = e.target.value;

    setCommentText(question.comments);

    //bubble up
    onChangeQuestionComments(question);
  };

  const changeQuestionLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionLabel(e.target.value);

    question.label = e.target.value;

    onChangeQuestionLabel(question);
  };

  const changeQuestionOrder = (
    question: Question,
    changeType: OrderChangeType
  ) => {
    onChangeQuestionOrder(question, changeType);
  };

  useEffect(() => {
    if (!isNil(question)) {
      setIsChecked(question.value);
      setCommentText(question.comments);
      setQuestionLabel(question.label);
    }
  }, [question]);

  return (
    <div className="question-container flex py-2 odd:bg-stone-100">
      <div
        className={`radio-container w-2/12 flex ${isEditMode ? 'hidden' : ''}`}
      >
        <div className={'flex items-center mr-2 print:mr-0'}>
          {/* this is supposed to be controlled but maybe adding the value attribute
          makes it uncontrolled and overrides the checked? causes a warning that will need
          troubleshooting later...could probably be solved by forcing the default
          value of the question and control to false instead of undefined and adjusting
          the design since it's the same result for scoring */}
          {/* yes option */}
          <input
            checked={isChecked}
            className={
              (!isNil(isChecked) && !isChecked) || isNil(isChecked)
                ? 'print:hidden'
                : 'print:appearance-none print:grid print:place-content-center print:before:content-[""] print:before:w-5 print:before:h-5 print:shadow-printRadioYes print:rounded-sm print:mr-2'
            }
            id={`question-${id}-yes`}
            name={id?.toString()}
            onChange={onChangeQuestionChecked}
            type="radio"
            value="1"
          />
          <label
            className={
              (!isNil(isChecked) && !isChecked) || isNil(isChecked)
                ? 'print:hidden'
                : 'print:text-green-600 print:font-bold print:text-sm'
            }
            htmlFor={`question-${id}-yes`}
          >
            Yes
          </label>
        </div>

        {/* no option */}
        <div className="flex items-center">
          <input
            checked={!isNil(isChecked) && !isChecked}
            className={
              (!isNil(isChecked) && isChecked) || isNil(isChecked)
                ? 'print:hidden'
                : 'print:appearance-none print:grid print:place-content-center print:before:content-[""] print:before:w-5 print:before:h-5 print:shadow-printRadioNo print:rounded-sm print:mr-2'
            }
            id={`question-${id}-no`}
            name={id?.toString()}
            onChange={onChangeQuestionChecked}
            type="radio"
          />
          <label
            className={
              (!isNil(isChecked) && isChecked) || isNil(isChecked)
                ? 'print:hidden'
                : 'print:text-red-500 print:font-bold print:text-sm'
            }
            htmlFor={`question-${id}-no`}
          >
            No
          </label>
          {/* no answer for print only */}
          <div
            className={`test ${
              !isNil(isChecked) ? 'hidden' : 'print:flex print:items-center'
            }`}
          >
            <input
              className={
                'hidden print:appearance-none print:grid print:place-content-center print:before:content-[""] print:before:w-5 print:before:h-5 print:border-2 print:border-gray-500 print:rounded-sm print:mr-2'
              }
              id={`question-${id}-empty`}
              readOnly
              type="radio"
            />
            <label
              className={
                !isNil(isChecked)
                  ? 'hidden'
                  : 'screen:hidden print:block print:text-gray-500 print:font-bold print:text-sm'
              }
              htmlFor={`question-${id}-empty`}
            >
              No Answer
            </label>
          </div>
        </div>
      </div>

      <div
        className={`label-container flex ${
          isEditMode ? 'w-full' : 'flex-wrap w-10/12'
        }`}
      >
        {isEditMode ? (
          <input
            className="border-2 border-black w-full mr-2"
            onChange={changeQuestionLabel}
            value={questionLabel}
          />
        ) : (
          <span>{questionLabel}</span>
        )}
        {/* not sure how to apply a style to a child of an odd parent in tailwind */}
        <textarea
          className={`comments-input w-full ${isEditMode ? 'hidden' : ''}`}
          onChange={onChangeCommentText}
          placeholder="Any comment text here..."
          value={commentText}
        ></textarea>
        <div className={`flex ${isEditMode ? 'block' : 'hidden'}`}>
          <button
            className="bg-blue-500 text-white mr-2 py-2 px-4"
            onClick={(e) => {
              e.preventDefault();
              changeQuestionOrder(question, OrderChangeType.Decrement);
            }}
          >
            ^
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4"
            onClick={(e) => {
              e.preventDefault();
              changeQuestionOrder(question, OrderChangeType.Increment);
            }}
          >
            v
          </button>
        </div>
      </div>
    </div>
  );
}

export default SectionItem;
