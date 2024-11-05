'use client';

import { useState } from 'react';

import clsx from 'clsx';

interface SectionItemProps {
  className?: string;
  children: React.ReactNode;
  id: string | number;
}

function SectionItem({ className, children, id }: SectionItemProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (e: { target: { value: string } }) => {
    setIsChecked(e?.target?.value === '1');
  };

  return (
    <div className={clsx('question-container flex py-2', className)}>
      <div className='radio-container w-2/12'>
        <input
          checked={isChecked}
          onChange={handleChange}
          type='radio'
          value='1'
          name={id?.toString()}
        />{' '}
        Yes
        <input
          onChange={handleChange}
          checked={!isChecked}
          type='radio'
          value='0'
          name={id?.toString()}
        />{' '}
        No
      </div>
      <div className='description-container w-10/12'>{children}</div>
    </div>
  );
}

export default SectionItem;
