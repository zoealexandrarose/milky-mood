import * as Yup from 'yup'
import {Formik, Form, Field} from 'formik'

function FormComponent({handleSuccess}) {
  // validation and error handling - like with Rails/Ruby
  const schema = Yup.object().shape({
    name: Yup.string().required('Required field'),
    email: Yup.string().email('Must be a valid email address').required('Required field')
  })

  return (
    <Formik
      initialValues={{
        name: "",
        email: ""
      }}

      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {({errors, touched}) => (
        <Form>
        <label>Name: </label>
        <Field type="text" name="name" autoComplete="off"/>
        {touched.name && errors && <div>{errors.name}</div>}

        <label>Email address: </label>
        <Field type="text" name="email" autoComplete="off"/>
        {touched.email && errors && <div>{errors.email}</div>}


        <button type="submit">Submit</button>

      </Form>
      )}
    </Formik>
  //   <form onSubmit={handleSuccess}>
  //     <label for="name">Name: </label>
  //     <input type="text" name="name" required autoComplete="off"/>

  //     <label for="email">Email address: </label>
  //     <input type="text" name="email" required autoComplete="off"/>

  //   </form>
  )
}

export default FormComponent
