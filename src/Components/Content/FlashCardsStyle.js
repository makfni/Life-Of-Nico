import styled from 'styled-components'

export const Cards = styled.div`
    .chat{
        position: absolute;
        text-align: center;
        margin-top: -300px; 
        vertical-align: middle;
        width: 30%;
        height: 200px;
        margin-left: 810px;
        background: white;
        box-shadow: 2px 2px 4px 5px #ccc;
        text-align: center;
        display: table;
        #chat{
            width: 100%;
            height: 100%;
            display: table-cell;
            vertical-align: middle;
        }
    }

    .upcoming{
        margin-left: 150px;
        width: 30%;
        height: 200px;
        background: white;
        box-shadow: 2px 2px 4px 5px #ccc;
        text-align: center;
        display: table;

        #upcoming{
            width: 100%;
            height: 100%;
            display: table-cell;
            vertical-align: middle;
        }
    }


`