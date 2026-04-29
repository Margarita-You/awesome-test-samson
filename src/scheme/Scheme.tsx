import { ReactFlow } from "@xyflow/react"
import { nodes, edges } from "./data"
import { nodeTypes } from "./CustomNodes"
import "@xyflow/react/dist/style.css"

export const Scheme = () => {
  return (
    <div
      style={{
        width: "1080px",
        height: "800px",
        background: "#36373b",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "white" }}>Масоны Самсона</h2>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        nodesConnectable={false}
        fitView
      />
    </div>
  )
}
