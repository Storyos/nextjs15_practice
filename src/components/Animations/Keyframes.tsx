import * as motion from "motion/react-client";

export default function Keyframes() {
    return (
        <motion.div
        animate={{
            scale: [1,1.5,1.5,1,1],
            rotate: [0,0,180,180,0],
            borderRadius: ["20%","20%","50%","50%","20%"]
        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0,0.2,0.5,0.8,1],
            repeat: Infinity,
            repeatDelay: 1
        }}
        className="w-[100px] h-[100px] bg-[#f5f5f5] rounded-[10px]"/>
    )
}