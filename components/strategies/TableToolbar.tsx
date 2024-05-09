import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function TableToolbar() {
  return (
    <div className="flex justify-between py-2">
      <Input
        className="w-50 "
        type="text"
        placeholder="Filter strategies..."
      ></Input>
      <Button>Add new</Button>
    </div>
  );
}
