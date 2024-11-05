interface SectionProps {
  children: React.ReactNode;
  title: string;
}

function Section({ children, title }: SectionProps) {
  return (
    <div className='border-b-stone-100 border-b-2 mb-8 pb-8'>
      <h2 className='font-sans font-bold text-xl'>{title}</h2>
      {children}
    </div>
  );
}

export default Section;
