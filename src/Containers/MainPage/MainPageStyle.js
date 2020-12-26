import styled from 'styled-components'

export const Content = styled.div`

    .page-container{
        overflow: 'hidden';
    }

    #intro{
        width: 40%;
        font-size: 4vw;
        font-family: 'Righteous';
        color: white;
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        margin-left: 200px;
    }

    .solar-system{
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        right: 200px;
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1350px){
        .solar-system{
            display: none;
        }
    }

    .orbit{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ffffffa5;
        border-radius: 50%;

        &:hover{
            animation-play-state: paused;
        }
    }

    .github-orbit{
        width:  375px;
        height: 375px;
        animation: spin 40s linear 0s infinite;
    }

  .linkedin-orbit{
        width: 300px;
        height: 300px;
        animation: spin 40s linear 0s infinite;
    } 

   .email-orbit{
        width: 225px;
        height: 225px;
        animation: spin 38s linear 0s infinite;
    }

    .resume-orbit{
        width: 150px;
        height: 150px;
        animation: spin 38s linear 0s infinite;
    }
 
    #github{
        position: absolute;
        top: -1px;
    }

    #linkedin{
        position: absolute;
        top: -30px;
    }

    #email{
        position: absolute;
        top: -18px;
    }

    #resume{
        position: absolute;  
        top: -25px;     
    }

    @keyframes spin{
        from{
            transform: rotate(0);
        } to {
            transform: rotate(360deg);
        }
    }

    ${'' /* .welcome{
        font-size: 1vw;
        border-width: 5px;
            border-style: solid;
            border-image: 
            linear-gradient(to bottom, #743ad5, #d53a9d,  rgba(0, 0, 0, 0)
            )
                 1 100%;
        padding: 70px;
        width: 35%;
        margin: auto;
        h2{
            font-family: 'Righteous';
            color: white;
            text-align: center;
            margin: auto;
        }
    } */}
`