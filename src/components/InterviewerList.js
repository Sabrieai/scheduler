
import React from "react";
import "components/InterviewerList.scss"
import InterviewListItems from "./InterviewerListItem";

export default function InterviewList (props) {

  const interviewerData = props.interviewers
  const interviewersList = interviewerData.map(indvInterviewer => {
    return (
    <InterviewListItems 
    key={indvInterviewer.id}
    name={indvInterviewer.name}
    avatar={indvInterviewer.avatar}
    selected={indvInterviewer.id === props.interviewer}
		setInterviewer={() => props.setInterviewer(indvInterviewer.id)}
    >
    </InterviewListItems>
    );
});
 
  return (

      <section className="interviewers">
       <h4 className="interviewers__header text--light">Interviewer</h4>
       <ul className="interviewers__list">{interviewersList}</ul>
      </section>

    );

}