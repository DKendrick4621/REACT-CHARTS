import * as React from "react";
import DeviceChart from "./DeviceChart";
import Layout from "./Layout";
import { name } from "../utils/generators";
import Radialchart from "./Radialchart";
export default function Home() {
  return (
    <Layout>
      <h2>{name("Jordan", "Hudgens")}</h2>
      <DeviceChart
        options={{
          colors: ["#32a852", "#d94016", "#450c34"],
          labels: ["Desktop", "Mobile", "Tablet"],
        }}
      />

      <DeviceChart
        options={{
          colors: ["#030002", "#03adfc", "#6bfc03"],
          labels: ["Smartphones", "laptops", "ipads"],
        }}
        />
      <Radialchart />
    </Layout>
  );
}