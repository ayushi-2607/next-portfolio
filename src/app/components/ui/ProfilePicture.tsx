import React from 'react'
import Image from 'next/image'
const ProfilePicture = () => {
    return (

        <div>
            <Image
                src="/sample_image.jpg"
                alt="A description of the image"
                width={300}
                height={300}
            />

        </div>
    )
}

export default ProfilePicture
