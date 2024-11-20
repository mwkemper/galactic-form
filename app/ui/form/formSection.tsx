import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import type { Question, Section } from '@/app/models';
import SectionItem from './sectionItem';
import OrderChangeType from '@/app/types/orderChangeType';

type SectionProps = {
  isEditMode: boolean;
  onChangeQuestionComments: (q: Question) => void;
  onChangeQuestionLabel: (q: Question) => void;
  onChangeQuestionOrder: (q: Question, changeType: OrderChangeType) => void;
  onChangeQuestionValue: (q: Question) => void;
  onChangeSectionTitle: (s: Section) => void;
  section: Section;
};

function Section({
  isEditMode,
  onChangeQuestionComments,
  onChangeQuestionLabel,
  onChangeQuestionOrder,
  onChangeQuestionValue,
  onChangeSectionTitle,
  section,
}: SectionProps) {
  const [sectionTitle, setSectionTitle] = useState<string>();

  const changeSectionTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setSectionTitle(e.target.value);

    section.title = e.target.value;

    onChangeSectionTitle(section);
  };

  useEffect(() => {
    setSectionTitle(section.title);
  }, [section]);

  const { id, order, questions, title } = section;

  return (
    <div
      className="border-b-stone-100 border-b-2 mb-8 pb-8 last:border-0"
      id={`section-${id}`}
    >
      {isEditMode ? (
        <input
          className="w-full border-2 border-black"
          value={sectionTitle}
          onChange={changeSectionTitle}
        />
      ) : (
        <h2 className="font-sans font-bold text-xl">{title}</h2>
      )}
      {/* sort questions by defined order and render an item for each one */}
      {questions
        ?.sort((a, b) => a.order - b.order)
        .map((question) => (
          <SectionItem
            isEditMode={isEditMode}
            key={`question-${question.id}`}
            onChangeQuestionComments={onChangeQuestionComments}
            onChangeQuestionLabel={onChangeQuestionLabel}
            onChangeQuestionOrder={onChangeQuestionOrder}
            onChangeQuestionValue={onChangeQuestionValue}
            question={question}
          />
        ))}
    </div>
  );
}

export default Section;
