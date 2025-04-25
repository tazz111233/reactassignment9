const AnecdoteList = ({ anecdotes, filter, onClickVote }) => {
  return (
    <div>
      {anecdotes
        .filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => 
      <div key={anecdote.id}>
        <p>{anecdote.content}</p>
        <span>has <b>{anecdote.votes}</b> votes</span>
        <button onClick={(e) => onClickVote(e, anecdote.id)}>vote</button>
      </div>
    )}
    </div>
  )
}

export default AnecdoteList