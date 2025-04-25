const AnecdoteFilter = ({ filter, onUpdateFilter }) => {
  return (
    <div>
      filter <input value={filter} onChange={onUpdateFilter} />
    </div>
  )
}

export default AnecdoteFilter