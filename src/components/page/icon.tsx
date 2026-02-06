import icons from "../../assets/icons.svg"

type IconProps = { name: string }

export const Icon = ({ name } : IconProps) => <svg viewBox="0 0 512 512" className="icon"><use href={`${icons}#${name}`}/></svg>
