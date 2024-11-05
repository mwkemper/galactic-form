import Image from 'next/image';
import Form from './ui/form';

export default function Home() {
  return (
    <div className='mx-auto my-8 max-w-screen-lg'>
      <main>
        <header className='flex justify-between'>
          <div>
            <span className='font-bebasNeue text-xl text-gray-500'>
              INSURANCE ASSESSMENT
            </span>
            <br />
            <span className='font-bebasNeue text-xl'>CLIENT NAME</span>
          </div>
          <div>
            <Image
              src='/galactic-logo.png'
              alt='Galactic Advisors logo'
              width={180}
              height={38}
              priority
            />
          </div>
        </header>
        <Form />
      </main>
      <footer className=''></footer>
    </div>
  );
}
