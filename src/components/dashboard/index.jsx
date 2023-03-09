import React from "react";
import Lights from "../lights";
import Climate from "../climate";
import Blinds from "../blinds";
import Energy from "../energy";
import './style.css';

const Dashboard = ({ data }) => (
  <main className="dashboard">
    <Lights key={data.lights} lights={data.lights} />
    <Climate temperature={data.climate.temperature} humidity={data.climate.humidity} />
    <Blinds state={data.blinds} />
    <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
  </main>
)

export default Dashboard;