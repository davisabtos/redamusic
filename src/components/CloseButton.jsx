import Button from "./Button";
import { CircleX } from "lucide-react";

function CloseButton({ clique }) {
  return (
    <Button tipo="danger" clique={clique}>
      <CircleX size={24} color="white" />
    </Button>
  );
}
export default CloseButton;
