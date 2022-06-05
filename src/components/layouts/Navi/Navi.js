import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class Navi extends Component {
    render() {
        return (
            <div className="left-menu h-100 pt-2 pb-2 ps-4 pe-4">
                Nav
                <FontAwesomeIcon icon={faHome} />
            </div>
        );
    }
}

export default Navi;