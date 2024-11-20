// I kind of like this pattern so you don't end up with
// import /form/form, but I could see an argument for
// just placing all of the Form code here in the index
// and nuking the form.tsx file. I think it makes it a little
// more clear at the cost of being a little more verbose
// and very slightly redundant with the exports.
import Form from './form';

export default Form;
