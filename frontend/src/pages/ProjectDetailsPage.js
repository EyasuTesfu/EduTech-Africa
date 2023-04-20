// components/ProjectDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectDetails = ({ match }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await axios.get(
        `BASE_URL/api/projects/${match.params.id}`
      );
      setProject(response.data);
    };
    fetchProject();
  }, [match.params.id]);

  //   return (
  //     // Render the project details
  //   );
};

export default ProjectDetails;
