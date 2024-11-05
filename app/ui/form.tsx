import Section from './section';
import SectionItem from './sectionItem';

function Form() {
  // ran out of time, would need to refactor this to use a list of questions
  // so I can track which ones are checked and update the average score
  // as things change
  return (
    <form>
      <Section title='Section One'>
        <SectionItem id='question-one'>
          Do you manage privileged accounts using a privileged access management
          software (PAM)?
        </SectionItem>
        <SectionItem
          className='bg-stone-100'
          id='question-two'
        >
          If a PAM solution is deployed, is accessible in a “check-in/out”
          model?
        </SectionItem>
        <SectionItem id='question-three'>
          Do you use MFA to protect all local and remote access to privileged
          user accounts?
        </SectionItem>
        <SectionItem
          className='bg-stone-100'
          id='question-four'
        >
          Do you manage privileged accounts using a privileged access management
          software (PAM)?
        </SectionItem>
        <SectionItem id='question-five'>
          If a PAM solution is deployed, is accessible in a “check-in/out”
          model?
        </SectionItem>
        <SectionItem
          className='bg-stone-100'
          id='question-six'
        >
          Do you use MFA to protect all local and remote access to privileged
          user accounts?
        </SectionItem>
      </Section>
      <Section title='Section Two'>
        <SectionItem id='question-one'>
          Do you manage privileged accounts using a privileged access management
          software (PAM)?
        </SectionItem>
        <SectionItem
          className='bg-stone-100'
          id='question-two'
        >
          If a PAM solution is deployed, is accessible in a “check-in/out”
          model?
        </SectionItem>
        <SectionItem id='question-three'>
          Do you use MFA to protect all local and remote access to privileged
          user accounts?
        </SectionItem>
        <SectionItem
          className='bg-stone-100'
          id='question-four'
        >
          Do you manage privileged accounts using a privileged access management
          software (PAM)?
        </SectionItem>
        <SectionItem id='question-five'>
          If a PAM solution is deployed, is accessible in a “check-in/out”
          model?
        </SectionItem>
        <SectionItem
          className='bg-stone-100'
          id='question-six'
        >
          Do you use MFA to protect all local and remote access to privileged
          user accounts?
        </SectionItem>
      </Section>
    </form>
  );
}

export default Form;
