import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthContext";

function Medications(props) {
  const { currentUser } = useAuth();

  useEffect(() => {}, []);

  return <div>Medications</div>;
}

Medications.propTypes = {};

export default Medications;
