import styled from 'styled-components'

export const Content = styled.div`

    .content{
        background-color: #1d1d1d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding-bottom: 50px;
    }

    #intro{
        width: 40%;
        font-size: 3vw;
        font-family: 'Righteous';
        color: white;
        margin-top: -350px;
        margin-left: 150px;
    }

    .solar-system{
        padding-right: 150px;
        position: relative;
        float: right;
        margin-top: -300px;
        width: 400px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1300px){
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

    .welcome{
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
    }
`