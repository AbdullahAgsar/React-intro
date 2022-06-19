import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChevronRight, faChevronLeft, faFileAlt,faUser, faComment, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import Logo from "../../../pictures/logo-sm.png"
import styled from "styled-components";

const StyledLeftMenu = styled.div`
  background: linear-gradient(var(--primary-color) 70%, rgb(16, 16, 16));
  box-shadow: 0 0 15px -1px rgba(16, 16, 16, 54%);
  z-index: 2;
  position: relative;
  color: var(--primary-text-color);
  height: 100%;
  padding: 2rem 3.5rem;

  .logo-and-name {
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.2rem;

    img {
      padding-top: 1rem;
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
      width: 80%;
      max-width: 120px;
    }

    span:not(.line) {
      font-size: 1.4em;
      border-radius: 20px;
      background-color: white;
      color: var(--primary-color);
      padding: 6px 15px;
      line-height: 1.1;
      font-weight: 700;
      white-space: nowrap;
    }

    .line {
      width: 100%;
      height: 2px;
      border-radius: 1px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
  
  .navigate-menu{
    position: relative;
    padding: 1.5em 0;
    
    a{
      color: inherit;
      text-decoration: none;
    }
    
    nav{
      padding-top: 1rem;
      
      ul{
        margin: 0;
        width: 100%;
        padding: 0;
        
        li{
          width: 100%;
          font-size: 1.3em;
          color: white;
          font-weight: 500;
          letter-spacing: .7px;
          margin-bottom: 1.2rem;
          cursor: pointer;
          
          &:last-child{
            margin-bottom: 0;
          }
          
          a{
            display: flex;
            align-items: center;
            white-space: nowrap;
            svg{
              width: 30px;
              margin-right: 8px;
              font-size: 1.3em;
            }
          }
        }
      }
    }
    
    .toggle-left-menu{
      width: 2em;
      height: 2em;
      background-color: white;
      border-radius: 1em;
      color: var(--primary-color);
      border: 1px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3em;
      margin: 2rem auto 0 auto;
      cursor: pointer;
    }
  }
`;

const LeftMenuItems = [
    {name: "Home", url: "#", icon: faHome},
    {name: "Applications", url: "#", icon:faFileAlt},
    {name: "Your Information", url: "#", icon:faUser},
    {name: "Messages", url: "#", icon:faComment},
    {name: "FAQ", url: "#", icon:faQuestionCircle}
]

function Navi() {
    // const [menuIsClose, setMenuIsClose] = useState(false)
    let newIcon = <FontAwesomeIcon icon={faChevronLeft}/>

    // useEffect(() => {
    //     newIcon = ()=>{
    //         menuIsClose ? <FontAwesomeIcon icon={faChevronRight}/> : <FontAwesomeIcon icon={faChevronLeft}/>
    //     }
    // }, [menuIsClose]);
    // onClick={setMenuIsClose(true)}

    return (
        <StyledLeftMenu>
            <div className="logo-and-name">
                <img src={Logo} alt={Logo}/>

                <span>
                    SITE NAME
                </span>

                <span className="line"></span>
            </div>

            <div className="navigate-menu">
                <nav>
                    <ul>
                        {
                            LeftMenuItems.map((value, index)=>{
                                return(
                                    <li key={index}>
                                        <a href={value.url}>
                                            <FontAwesomeIcon icon={value.icon} />
                                            {value.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>

                <div className="toggle-left-menu">
                    {
                        newIcon
                    }
                </div>
            </div>
        </StyledLeftMenu>
    );
}

export default memo(Navi)