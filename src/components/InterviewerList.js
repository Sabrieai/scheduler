
import React from "react";
import "components/InterviewerList.scss"
import InterviewListItems from "./InterviewerListItem";

export default function InterviewList (props) {

  const {value,interviewers,onChange} = props

 
  const interviewersList = interviewers.map(indvInterviewer => {
    return (
    <InterviewListItems 
    key={indvInterviewer.id}
    name={indvInterviewer.name}
    avatar={indvInterviewer.avatar}
    selected={indvInterviewer.id === props.value}
		setInterviewer={() => onChange(indvInterviewer.id)}
    >
    </InterviewListItems>
    );
});
 
  return (

      <section onClick={console.log(props)} className="interviewers">
       <h4 className="interviewers__header text--light">Interviewer</h4>
       <ul className="interviewers__list">{interviewersList}</ul>
      </section>

    );

}