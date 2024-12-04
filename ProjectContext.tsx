"use client";
import React, { createContext, useState } from "react";

export const ProjectContext = createContext({
	project: {
		id: "",
		title: "",
		location: "",
		equipment: [],
		venue: "",
		type: "",
	},
	setProject: (project: {}) => {},
});

const ProjectContextProvider = ({ children }: any) => {
	const [project, setProject] = useState({
		id: "",
		title: "",
		location: "",
		equipment: [],
		venue: "",
		type: "",
	});

	const value: any = {
		project: project,
		setProject: setProject,
	};

	return (
		<ProjectContext.Provider value={value}>
			{children}
		</ProjectContext.Provider>
	);
};

export default ProjectContextProvider;
