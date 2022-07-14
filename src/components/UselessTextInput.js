import React from "react";
import { TextInput } from "react-native";

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props}
      editable
      maxLength={40}
      placeholder="Search..."
    />
  );
}

export default UselessTextInput;
