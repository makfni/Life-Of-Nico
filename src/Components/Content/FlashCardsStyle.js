import styled from 'styled-components'

export const Cards = styled.div`
    .chat{

        position: absolute;
        text-align: center;
        vertical-align: middle;
        width: 45%;
        height: auto;
        text-align: center;
        display: table;
        border-width: 3px;
            border-style: solid;
            border-image: 
            linear-gradient(to bottom, #743ad5, #d53a9d,  rgba(0, 0, 0, 0)
            )
                 1 100%;
        #chat{
            padding: 3vw;
            font-size: 2vw;
            font-family: 'Righteous';
            color: white;
        }
    }

    .upcoming{
        position: absolute;
        width: 45%;
        height: auto;
        text-align: center;
        display: table;
        border-width: 3px;
            border-style: solid;
            border-image: 
            linear-gradient(to bottom, #743ad5, #d53a9d,  rgba(0, 0, 0, 0)
            )
                 1 100%;
        #upcoming{
            padding: 3vw;
                font-size: 2vw;
                font-family: 'Righteous';
                color: white;
        }
    }


`