import { useState } from 'react'

/* Component Imports */
import Notification from './components/Notification'
import AnecdoteFilter from './components/AnecdoteFilter'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  /* State to keep track of notification */
  const [notification, setNotification] = useState('')

  /* State to keep track of filter */
  const [filter, setFilter] = useState('')

  /* State to keep track of anecdotes */
  const [anecdotes, setAnecdotes] = useState([
    { id: 1, content: 'But it works in my machine...', votes: 8 },
    { id: 2, content: 'If it hurts, do it more often.', votes: 2 },
    { id: 3, content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 1 },
    { id: 4, content: 'The hardest part of coding is getting started.', votes: 5 },
    { id: 5, content: 'Adding manpower to a late software project makes it later!', votes: 0 }
  ])


  /**
   * Performs two actions:
   *  Updates the vote count of the anecdote the user has voted for
   *  Updates the notification and then resets it after 5 seconds
   * @param {obj} e an event object
   * @param {number} id The id of the anecdote the user has voted for
   */
  const handleClickVote = (e, id) => {
    e.preventDefault()
    const newAnecdotes = anecdotes
      .map((obj) => obj.id === id ? { ...obj, votes: obj.votes + 1 } : obj )
    setAnecdotes(newAnecdotes)

    const votedAnecdote = anecdotes.find((obj) => obj.id === id)
    setNotification(`you voted for anecdote ${votedAnecdote.content}`)
    setTimeout(() => {
      setNotification('')
    }, 5000)
  }


  /**
   * Performs two actions:
   *  Updates the vote count of the anecdote the user has voted for
   *  Updates the notification and then resets it after 5 seconds
   * @param {obj} e an event object
   */
  const handleClickCreate = (e) => {
    e.preventDefault()
    const content = e.target.content.value
    e.target.content.value = ''
    const newAnecdote = { id: anecdotes.length + 1, content, votes: 0 }
    setAnecdotes(anecdotes.concat(newAnecdote))

    setNotification(`you created anecdote ${content}`)
    setTimeout(() => {
      setNotification('')
    }, 5000)
  }

  /**
   * Performs one action:
   *  Updates the filter as the user types characters into input
   * @param {obj} e an event object
   */
  const handleUpdateFilter = (e) => {
    e.preventDefault()
    console.log(e.target.value);
    setFilter(e.target.value)
  }


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification notification={notification} />
      <AnecdoteFilter filter={filter} onUpdateFilter={handleUpdateFilter} />
      <AnecdoteList anecdotes={anecdotes} filter={filter} onClickVote={handleClickVote}/>
      <AnecdoteForm onClickCreate={handleClickCreate} />
    </div>
  )
}

export default App;