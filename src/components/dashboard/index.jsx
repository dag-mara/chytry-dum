import React from "react";
import Lights from "../lights";




const Dashboard =({data}) => (
    <main className="dashboard">
		<Lights key={data.lights} lights={data.lights}/>
    </main>
)

export default Dashboard;