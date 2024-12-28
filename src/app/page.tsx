import EnterAnimation from "@/components/Animations/EnterAnimation";
import ExitAnimation from "@/components/Animations/ExitAnimation";
import Gestures from "@/components/Animations/Gestures";
import Keyframes from "@/components/Animations/Keyframes";

export default function page() {

  return (
    <div className="grid grid-cols-3 gap-2 m-20">
      <EnterAnimation/>
      <ExitAnimation/>
      <Gestures/>
      <Keyframes/>
    </div>
  );
}

