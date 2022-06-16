import {memo} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Item({keys, value, link, subMenu}) {
    if(subMenu.length === 0){
        return (
            <li key={keys}>
                <a href={link}>
                    {
                        value
                    }
                </a>
            </li>
        );
    }
    else{
        return (
            <li key={keys} className="dropdown">
                <a href={link}>
                    {
                        value
                    }
                    <FontAwesomeIcon icon={faChevronRight} />
                </a>

                <ul>
                    {
                        subMenu.map((item,index)=>(<li key={index}><a href={item.link}></a>{item.value}</li>))
                    }
                </ul>
            </li>
        );
    }
}

export default memo(Item);