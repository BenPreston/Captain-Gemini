import { Icon } from '@iconify/react'
import stormAdvisory from '@iconify/icons-mdi/storm-advisory'

const StormMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="storm-marker marker" onClick={onClick}>
            <Icon icon={stormAdvisory} className='storm-icon' />
        </div>
    )
}

export default StormMarker