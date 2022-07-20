import useStateWithValidation from "../hooks/useStateWithValidation"

export default function StateWithValidationComponent() {
  const [username, setUsername, isValid] = useStateWithValidation(
    name => name.length > 5,
    ""
  )

  return (
    <>
        <h3>useStateWithValidation Hook</h3>
      <div>Valid: {isValid.toString()}</div>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
    </>
  )
}