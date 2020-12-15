import styled from 'styled-components'

const AboutMe = styled.div`

    .content{
        background-color: #1d1d1d;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding-bottom: 400px;
        margin-top: 300px;

    }

    .about-me{
        text-align: center;
        padding: 100px;
        .text{
            border-width: 3px;
            border-style: solid;
            border-image: 
            linear-gradient(to bottom, #743ad5, #d53a9d,  rgba(0, 0, 0, 0)
            )
                 1 100%;
            color: white;
            float: right;
            width: 55%;
            height: 400px;
            a{
                
                text-align: center;
                vertical-algin: middle;
                font-size: 2vw;
                font-family: 'Righteous';
                color: white;
                padding: 10px;
            }
           
        }

    }

    #photo{
        width: 20%;
        height: 350px;
        border-radius: 50px;
        margin-left: -150px;
    }

    @media (max-width: 1275px){
        #photo{
            margin: auto;
            display: block;
            border-radius: 250px;

            width: 20vw;
            height: 30vw;
        }

        .text{
            margin: auto;
            display: block;
            width: 100% !important;
            padding-top: 100px;
        }


    }

`

export default AboutMe