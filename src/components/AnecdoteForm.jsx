const AnecdoteForm = ({ onClickCreate }) => {
  return (
    <>
      <h2>Create new</h2>
      <form onSubmit={onClickCreate}>
        <input id="content" placeholder="Add new" />
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm