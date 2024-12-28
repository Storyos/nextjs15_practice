
import * as motion from "motion/react-client";
export default async function Gestures() {
    return (
        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="w-[100px] h-[100px] bg-[#9911ff] rounded-[5px]">
        </motion.div>
    );
}