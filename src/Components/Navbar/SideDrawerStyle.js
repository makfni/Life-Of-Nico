import styled from 'styled-components'

export const Ul = styled.ul`
    ul{
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        margin-right: 45px;
        
    }
        
    li{
        padding: 30px;
        
        a{
            font-family: 'Roboto', sans-serif;
            text-decoration: none;
            color: white;
        }

    }

     
    li:focus-within a {
    outline: none;
    }

    #auth {
        border-radius: 12px;
        margin: 10px;
        padding: 0.80em 3em;
        background-size: 200% auto;
        color: white;
        box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
        background-image: linear-gradient(to right, #00cc00 35%, #ffffcc 50%, #33cc33 65%, #009933 100%);
        transition: 0.5s;
        &:hover {
        background-position: right center;
        } 

        &:active {
            box-shadow: 0 12px 16px 0 rgba(0,0,0,1.24), 0 17px 50px 0 rgba(0,0,0,1.19);

        }
    } 


    @media (max-width: 1212px) {
        flex-flow: column nowrap;
        background-color: black;
        margin-top: -1px;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        ul{
            flex-flow: column nowrap;
            padding: 60px;
            margin-left: -20px;
            margin-top: -75px;

            #auth{
                margin-left: -30px;
            }
        }
        li{
            padding: 25px;
        }
    }
`