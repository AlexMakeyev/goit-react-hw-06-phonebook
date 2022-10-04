// import React from "react";
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  LabelName,
  LabelPhone,
  ContactsForm,
  Error,
  AddButton,
} from './Form.styled';
import { nanoid } from 'nanoid';
// import * as yup from 'yup';
// import { Formik } from 'formik';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const onChangeInputName = event => {
  //   setName(event.currentTarget.value);
  // };
  // const onChangeInputNumber = event => {
  //   setNumber(event.currentTarget.value);
  // };

  const onInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmitForm = event => {
    const id = nanoid(10);
    const contact = {
      id,
      name,
      number,
    };
    event.preventDefault();
    onSubmit(contact);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <ContactsForm onSubmit={onSubmitForm}>
      <LabelName>
        Name:
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onInputChange}
        />
      </LabelName>
      <LabelPhone>
        Number:
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onInputChange}
        />
      </LabelPhone>
      <AddButton type="submit">Add contact</AddButton>
    </ContactsForm>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

// const initialValues = {
//     name: '',
//     number: '',

// };
// const schema = yup.object().shape({
//     name: yup.string().required(),
//     number: yup.number().required().positive().integer(),

// })
// export class FormPhone extends React.Component {

//     handleSubmit = (values, actions) => {

//         const id = nanoid(10);
//         const contact = {
//           id,
//           ...values,
//         };
//         this.props.submit(contact);
//         console.log(values);
//         console.log(actions);
//         actions.resetForm();

//     };
//     // static propTypes = {
//     //     onSubmit: PropTypes.func.isRequired,
//     //   };

//       render() {

//         return (<div>
//             <Formik
//                 initialValues={initialValues}
//                 onSubmit ={this.handleSubmit}
//                 validationSchema={schema}>
//             <ContactsForm >
//                 <LabelName>Name:
//                     <Input
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         placeholder="Please enter name"
//                         autocomplete="off"
//                         />
//                         <Error component="div" name="name" />

//                 </LabelName>

//                 <LabelPhone>Number:
//                     <Input
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         placeholder="Please enter number"
//                         autocomplete="off"
//                         />
//                         <Error component="div" name="number" />
//                 </LabelPhone>
//                 <AddButton type="submit">Add contact
//                 </AddButton>
//             </ContactsForm>

//         </Formik>
//         </div>)

//       }
// };
