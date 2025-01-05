"use client"

import { motion, useScroll, useSpring } from "motion/react"
// 스크롤 진행바 표현하기

export interface ScrollIndicatorProps {
    position?: "fixed" | "absolute" | "relative" | "sticky"
    top?: number
    left?: number
    right?: number
    height?: number
    backgroundColor?: string   
    originX?: number
}

export function ScrollIndicator( {props={}}:{ props? : ScrollIndicatorProps} ) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, // 탄성 정도 (클수록 더 빠르게 움직임)
        damping: 30, // 감쇠 정도 (클수록 에니메이션 종료 속도가 빨라짐)
        restDelta: 0.001, // 정지 상태에 도달했음을 판별하는 기준 (작을수록 부드러운 정지속도)
    })
    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: props.position || "fixed",
                    top: props.top || 0,
                    left: props.left || 0,
                    right: props.right || 0,
                    height: props.height || 10,
                    originX: props.originX || 0,
                    backgroundColor: props.backgroundColor || "#ff0088",
                }}
            />
        </>
    )
}
