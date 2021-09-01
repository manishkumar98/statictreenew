import "./styles.css";
import { connect } from "react-redux";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";

import React from "react";
//import data from "./data";
let data = {
  id: "root",
  name: "Subjects",
  children: [
    {
      id: "p",
      name: "Physics"
    },
    {
      id: "c",
      name: "Chemistry",
      children: [
        {
          id: "pc",
          name: "Physical Chemistry"
        },
        {
          id: "oc",
          name: "Organic Chemisty"
        }
      ]
    },
    {
      id: "m",
      name: "math",
      children: [
        {
          id: "m1",
          name: "Determinant"
        },
        {
          id: "m2",
          name: "Matrices"
        }
      ]
    }
  ]
};
function App() {
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <div className="App">
      <h1>Creating a static tree</h1>
      <TreeView>{renderTree(data)}</TreeView>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};
export default connect(mapStateToProps)(App);
