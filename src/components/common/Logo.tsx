import { FC } from 'react'
import { Link } from 'react-router-dom'
interface LogoProps {
  containerStyles: string
  textStyles: string
  spanStyles: string
}

const Logo: FC<LogoProps> = ({ containerStyles, textStyles, spanStyles }) => {
  return (
    <div className={containerStyles}>
      <Link to="/">
        <h2 className={textStyles}>
          Leave <span className={spanStyles}>Management System</span>
        </h2>
      </Link>
    </div>
  )
}

export default Logo
