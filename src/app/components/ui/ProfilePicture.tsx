import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
const ProfilePicture = () => {
    return (

        // <div className="">
        //     <motion.div
        //         className="rounded"
        //         initial={{opacity:0}}
        //         // animate={{ rotate: 360 }}
        //         animate = {{
        //             opacity:1,
        //             transition:{ delay:2, duration: 0.4, ease: "easeIn" }
        //         }}
                
        //     >
        //         <Image
        //             src="/sample_image.jpg"
        //             alt="A description of the image"
        //             width={300}
        //             height={300}
        //             className="rounded"
        //         />
        //     </motion.div>
        // </div>
        <div className="">
            <motion.div
                className="rounded-full overflow-hidden mt-0 sm:mt-20 md:mt-0"
                animate={{ boxShadow: ["0 0 20px #334365", "0 0 40px #334365", "0 0 20px #334365"] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-48 h-48 sm:w-40 sm:h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
                    <Image
                        src="/sample_image.jpg"
                        alt="A description of the image"
                        width={400}
                        height={400}
                        className="rounded"
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default ProfilePicture
