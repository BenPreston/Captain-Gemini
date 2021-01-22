import { Icon } from '@iconify/react'
import sailboatIcon from '@iconify/icons-mdi/sail-boat'

const BoatMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="sailboat-marker marker" onClick={onClick}>
            <Icon icon={sailboatIcon} className='sailboat-icon' />
        </div>
    )
}

export default BoatMarker