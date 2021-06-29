import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid'

import { createStore } from 'redux'

// Acction
const buildHabit = ({
  description = '',
  streak = 0,
  setHours = '00:00',
  setDays = 'everyday',
  endTime = 0,
  duration = 0
} = {}) => ({
  type: 'BUILD_HABIT',
  habit: {
    id: uuid(),
    description,
    streak,
    setHours,
    setDays,
    endTime,
    duration
  }
})

const trackHabit = ({ id }) => ({
  type: 'TRACK_HABIT',
  id
})

// Reducer
const habitReducer = (state = [], action) => {
  switch (action.type) {
    case 'BUILD_HABIT':
      return [
        ...state,
        action.habit
      ]
    case 'TRACK_HABIT':
      return state.map((habit) => {
        return habit.id === action.id
      })
    default:
      return state
  }
}

// Store
const store = createStore(habitReducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(buildHabit({
  description: 'Workout',
  setHours: '15:00',
  duration: 60
}))

store.dispatch(buildHabit({
  description: 'Reading',
  setHours: '06:00',
  duration: 45
}))

// store.dispatch(trackHabit())



const jsx = (
  <div>
    <h1>Habit Builders</h1>
  </div>
)


ReactDOM.render(jsx, document.getElementById('root'));

