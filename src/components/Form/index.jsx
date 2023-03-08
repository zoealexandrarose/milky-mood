
function FormComponent({handleSuccess}) {
  return (
    <form onSubmit={handleSuccess}>
      <label for="name">Name: </label>
      <input type="text" name="name" required autoComplete="off"/>

      <label for="email">Email address: </label>
      <input type="text" name="email" required autoComplete="off"/>

      <button type="submit">Submit</button>
    </form>
  )
}

export default FormComponent
