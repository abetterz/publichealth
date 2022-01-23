import React, { useState } from "react";
import GenerateForm from "../generator/form";

export default function PlusForm(props) {
  const [location_view, setlocation_view] = useState({});

  const setLocationValues = (obj = {}) => {
    setlocation_view({ ...location_view, ...obj });
  };
  
  const onRemove = (obj) => {
    let state = location_view[obj];
    setlocation_view(state);
  };


  return (
    <GenerateForm
      onRemove={onRemove}
      handleSelectPlace={props.handleSelectPlace}
      getFieldValue={props.getFieldValue}
      setFieldsValue={props.setFieldsValue}
      setLocationValues={setLocationValues}
      dict_key={props.section}
      callback={props.formCallback}
      location_values={props.location_values}
      location_view={location_view}
      onChangeField={props.onChangeField}
      deco={props.deco}
      past_on={props.past_on}
    />
  );
}
