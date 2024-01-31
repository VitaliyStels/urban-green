import React from "react"


interface AccentButtonProps {
    name: string,
    url: string
}

const AccentButton: React.FC<AccentButtonProps> = ({name, url}) => {
    return (
        <div className="px-3">
            <div className="p-2 flex flex-row bg-highlighted-color hover:bg-accent-color text-white hover:text-black rounded-3xl items-center">
                <a className="px-1 font-light" href={url}>{name}</a>
            </div>
        </div>
    )
}

export default AccentButton;