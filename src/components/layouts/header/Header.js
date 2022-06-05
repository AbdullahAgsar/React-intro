import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";


const userSections = ["profil","çıkış","dil"]

const PageLocation = styled.h1`
  font-size: 3em;
  font-weight: bold;
  color: var(--primary-text-color);
  opacity: .4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  & svg{
    font-size: .9em;
    margin: 10px;
  }
  `;

const UserSectionsMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin: 0;
  
  li{
    padding: 3px 14px;
    font-size: 1.1em;
    border-radius: 17px;
    font-weight: 500;
    cursor: pointer;
    outline: 2px solid transparent;
    transition: 300ms background-color;
    
    &:hover{
      background-color: var(--primary-bg-color);
      color: var(--primary-color);
      outline-color: var(--primary-bg-color);
    }
    
    &.dropdown{
      background-color: var(--primary-bg-color);
      color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 2;
      
      &:hover{
        background-color: transparent;
        color: var(--primary-text-color);
        
        svg{
          margin-left: 12px;
        }
        
        ul{
          opacity: 1;
          visibility: visible;
          user-select: auto;
          top: 100%;
        }
      }
      
      ul{
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 5px;
        outline: 2px solid var(--primary-text-color);
        background-color: var(--primary-color);
        padding: 8px 12px;
        user-select: none;
        opacity: 0;
        visibility: hidden;
        transition: 300ms all;
        
        li{
          margin-bottom: 9px;
          
          &:last-child{
            border-bottom: 0;
          }
        }
      }
    }
    
    a{
      text-decoration: none;
      color: inherit;
      display: block;
    }
    
    svg{
      font-size: .8em;
      margin-left: 7px;
      transition: 300ms margin-left;
    }
  }
`;

class Header extends Component {
    render() {
        return (
            <header className="pt-2 pb-2 ps-4 pe-4 d-flex justify-content-between align-items-center">
                <PageLocation className="page-location">
                    <FontAwesomeIcon icon={faHome} />
                    Anasayfa
                </PageLocation>

                <UserSectionsMenu className="user-sections">
                    {
                        userSections.map((value,index)=>{
                            if(value.toLowerCase() === "dil" || value.toLowerCase() === "language"){
                                return (
                                    <li key={index} className="dropdown">
                                        {value.toLowerCase().replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, x => x.toUpperCase())}
                                        <FontAwesomeIcon icon={faChevronRight} />

                                        <ul>
                                            <li>
                                                <a href="#">TR</a>
                                            </li>
                                            <li>
                                                <a href="#">EN</a>
                                            </li>
                                        </ul>
                                    </li>
                                )
                            }
                            else{
                                return (
                                    <li key={index}>
                                        <a href="#">{value.toLowerCase().replace(/^[\u00C0-\u1FFF\u2C00-\uD7FF\w]|\s[\u00C0-\u1FFF\u2C00-\uD7FF\w]/g, x => x.toUpperCase())}</a>
                                    </li>
                                )
                            }
                        })
                    }
                </UserSectionsMenu>
            </header>
        );
    }
}

export default Header;