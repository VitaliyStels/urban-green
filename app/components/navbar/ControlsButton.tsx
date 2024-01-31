import React from "react"
import Image from 'next/image'

interface ControlsButtonProps {
    name: string,
    icon: string,
    url: string
}

const ControlsButton: React.FC<ControlsButtonProps> = ({name, url, icon}) => {
    return (
        <div className="px-3">
            <div className="p-1 flex flex-row bg-button-main-color hover:bg-accent-color rounded-2xl items-center">
                <a className="px-1" href={url}>{name}</a>
                <div className="bg-white p-2 rounded-full">
                    <Image
                        src={"/icons/"+ icon}
                        width={13}
                        height={13}
                        alt="icon"
                    />
                </div>
            </div>
        </div>
    )
}

export default ControlsButton;