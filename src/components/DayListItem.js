import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  let full = false;
  if(props.spots === 0) {
    full = true;
  }

  const ItemClass = classNames("day-list__item",{
   "--selected": props.selected,
   "--full":full
  })

  const spaceFree = ItemClass.replace(" ","")

  return (
    <li className={spaceFree} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}