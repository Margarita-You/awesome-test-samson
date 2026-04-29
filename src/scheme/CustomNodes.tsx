import { Handle, Position } from "@xyflow/react"

const CustomNode = ({ data }: { data: { label: string } }) => (
  <div
    style={{
      padding: "10px 20px",
      background: "#fff",
      border: "1px solid #777",
      width: "200px",
      textAlign: "center",
    }}
  >
    <Handle
      type='source'
      id='source-left'
      position={Position.Left}
      style={{ opacity: 0, pointerEvents: "none" }}
    />
    <Handle
      type='source'
      id='source-right'
      position={Position.Right}
      style={{ opacity: 0, pointerEvents: "none" }}
    />
    <Handle
      type='target'
      id='target-right'
      position={Position.Right}
      style={{ opacity: 0, pointerEvents: "none" }}
    />
    <Handle
      type='target'
      id='target-bottom'
      position={Position.Bottom}
      style={{ opacity: 0, pointerEvents: "none" }}
    />
    {data.label}
  </div>
)

export const nodeTypes = { custom: CustomNode }
