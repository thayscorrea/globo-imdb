import React, { useMemo } from "react";
import { motion } from "framer-motion";

import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Carousel from "./Carousel";

const CarouselBlock = ({ items }) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div className="bg-black w-full pt-16" id="pricing">
            <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-left justify-center">
                <div className="flex flex-col w-full my-16" id="testimoni">
                    <ScrollAnimationWrapper>
                        <motion.h3
                            variants={scrollAnimation}
                            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white-500 leading-normal mx-auto">
                            Em destaque
                        </motion.h3>
                        <motion.p
                            variants={scrollAnimation}
                            className="leading-normal mx-auto mb-2 mt-4 text-white-500"
                        >
                            Os filmes e séries mais bem avaliados
                        </motion.p>
                    </ScrollAnimationWrapper>

                    <ScrollAnimationWrapper className="w-full flex flex-col py-12">
                        <motion.div variants={scrollAnimation}>
                            <Carousel items={items} />
                        </motion.div>
                    </ScrollAnimationWrapper>
                </div>
            </div>
        </div>
    )
}

export default CarouselBlock