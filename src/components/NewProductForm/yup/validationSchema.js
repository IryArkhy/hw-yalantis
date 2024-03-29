import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Should be at least 3 characters long')
    .max(20, 'The maximum length is 20 characters')
    .required('The name is required'),
  price: Yup.number()
    .moreThan(0, 'Hey, get at least 3 dollars')
    .required('You cannnot give stuff away'),
  origin: Yup.string().required('You should write the origin'),
});

export default schema;
