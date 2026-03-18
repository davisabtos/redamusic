import Button from "./Button";
import { ArrowLeftToLine } from "lucide-react";
function BackButton() {
  return (
    <Button tipo="secondary" clique={() => window.history.back()}>
      <ArrowLeftToLine size={24} color="white" />
    </Button>
  );
}
export default BackButton;
