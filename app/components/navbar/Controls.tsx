import ControlsButton from "./ControlsButton"

export default function Controls() {
    return (
        <div className="flex flex-row lg:pr-28">
            <ControlsButton name="Home" icon="home.png" url="#" />
            <ControlsButton name="Service" icon="leaf.png" url="#" />
            <ControlsButton name="Technology" icon="setting.png" url="#" />
        </div>
    )
}