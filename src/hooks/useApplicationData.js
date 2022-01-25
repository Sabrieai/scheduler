import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData () {
  //return an object with state, setDay bookInterview cancelInterview

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  },[])


  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
  
    return axios.put(`/api/appointments/${id}`,appointment)
    .then(function () {
     
     const prevInterview={...state.appointments[`${id}`].interview}

      setState(prev => ({...prev, appointments}))

      let days = [...state.days];

      for (let day in state.days) {

      if (state.days[day].appointments.includes(id) && !prevInterview) {

        const currentSpots = state.days[day].spots
        const updateDay = {...state.days[day], spots: currentSpots - 1}
        days = [...state.days]
        days[day]=updateDay
       }

      }

      setState(prev => ({...prev, days}))

    })
  }

  function cancelInterview(id) {
  
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
  
    return axios.delete(`/api/appointments/${id}`)
    .then(function () {
      setState(prev => ({...prev, appointments}))

      let days = [...state.days];

      for (let day in state.days) {

        if (state.days[day].appointments.includes(id)) {

          const currentSpots = state.days[day].spots
          const updateDay = {...state.days[day], spots: currentSpots + 1}
           days = [...state.days]
           days[day]=updateDay

          }
        }

        setState(prev => ({...prev, days}))
    })
    
  
  }

  const results = {state,setDay,bookInterview,cancelInterview}

  return results

}