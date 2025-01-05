"use client"

import * as motion from "motion/react-client"
import { useRef } from "react"

export default function DragConstraints() {
    const constraintsRef = useRef<HTMLDivElement>(null)

    return (
            <motion.div 
                ref={constraintsRef} 
                className="relative w-64 h-64 bg-gray-700 rounded-lg"
            >
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.2}
                    className="absolute top-0 left-0 w-16 h-16 bg-blue-500 rounded-lg cursor-grab active:cursor-grabbing"
                />
            </motion.div>
    )
}

