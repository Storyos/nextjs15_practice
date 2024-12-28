import * as motion from "motion/react-client";



export default function EnterAnimation() {
  return (
    <motion.div
    className="w-[100px] h-[100px] bg-[#dd00ee] rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        type: "spring",
        bounce: 0.5,
      }}
    >
    </motion.div>
  );
}
