import styled from 'styled-components'

export const Nav = styled.nav`
    z-index: 1;
    background: black;
    height: ${({ scrollNav }) => (scrollNav ? '45px' : '75px')}; 
    transition: ${({ scrollNav }) => (scrollNav ? '0.8s' : '0')}; 
    color: white;
    transition-timing-function: ease;
    transition: 0.8s;
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    ${'' /* border-bottom: 2px solid #f1f1f1; */}
    justify-content: space-between;
    ${'' /* margin-left: -150px; */}
    padding: 10px;
    
    .nav-logo{
        padding: 15px 0;
        ${'' /* margin-left: 55px; */}
        #logo{
            color: white;
            font-family: 'Righteous';
            font-weight: bold;
            font-size: 25px;
            text-decoration: none;
            padding-left: 65px;
        }
    }
${'' /* 
    #auth{
        margin: 77px;
    } */}

`



