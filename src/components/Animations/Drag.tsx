"use client"

import { motion } from "framer-motion"

export default function Drag() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <motion.div
                drag
                className="w-24 h-24 bg-purple-600 rounded-lg cursor-move"
            />
        </div>
    )
}

