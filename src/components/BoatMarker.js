import { Icon } from '@iconify/react'
import sailboatIcon from '@iconify/icons-mdi/sail-boat'

const BoatMarker = ({ lat, lng, type }) => {
    return (
        <div className="sailboat-marker marker" >
            <Icon icon={sailboatIcon} className={type}  />
        </div>
    )
}

export default BoatMarker