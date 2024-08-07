import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'
const ProfilePicture = () => {
    return (

        <div className="">
            <motion.div
                className="rounded-full overflow-hidden mt-0 sm:mt-20 md:mt-0"
                animate={{ boxShadow: ["0 0 20px #334365", "0 0 40px #334365", "0 0 20px #334365"] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-48 h-48 sm:w-40 sm:h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
                    <Image
                        src="/ayushi_image.jpg"
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
