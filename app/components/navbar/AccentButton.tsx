import React from "react"


interface AccentButtonProps {
    name: string,
    url: string
}

const AccentButton: React.FC<AccentButtonProps> = ({name, url}) => {
    return (
        <div className="px-3 py-2 lg:py-0">
            <div className="p-2 bg-highlighted-color text-center hover:bg-accent-color text-white hover:text-black rounded-3xl">
                <a className="px-1 font-light" href={url}>{name}</a>
            </div>
        </div>
    )
}

export default AccentButton;