'use client';

import { useState } from 'react';
import Image from 'next/image';
import Form from './ui/form';

export default function Home() {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  return (
    <div className="mx-auto my-8 max-w-screen-lg p-12">
      <main>
        <header className="flex justify-between">
          <div>
            <span className="block font-bebasNeue text-xl text-gray-500">
              INSURANCE ASSESSMENT
            </span>
            <span className="block font-bebasNeue text-xl mb-4">
              CLIENT NAME
            </span>
            <div className="hidden print:block mb-4">
              <span className="block">Conducted On: Date</span>
              <span className="block">Date Accepted: Date</span>
              <span className="block">Reviewer Name: Name</span>
            </div>
          </div>
          <div>
            <Image
              src="/galactic-logo.png"
              alt="Galactic Advisors logo"
              width={180}
              height={38}
              priority
            />
          </div>
        </header>
        <Form isEditMode={isEditMode} />
      </main>
      <footer className="flex items-center justify-center">
        {!isEditMode ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 print:hidden mr-4"
            onClick={() => window.print()}
          >
            Print Form
          </button>
        ) : null}
        <button
          className="bg-blue-500 text-white px-4 py-2 print:hidden"
          onClick={() => setIsEditMode(!isEditMode)}
        >
          {isEditMode ? 'Save Form' : 'Edit Form'}
        </button>
      </footer>
    </div>
  );
}
