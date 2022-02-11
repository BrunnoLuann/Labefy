import styled from "styled-components";

export const ContainerCriaPlaylist = styled.div`
flex-direction: column;
margin: 0px;
padding: 15px;
flex-grow: 1;
width: 40%;
background-image: url(https://www.folhavitoria.com.br/entretenimento/blogs/na-balada/wp-content/uploads/2020/05/M%C3%BAsica-Quarentena-1.jpg);
width:147vh;
height: 95vh;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
input {
    height: 40px;
    background:transparent;
    border: none;
    border-bottom: 1px solid white;
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    color:#F7E2FD;
    font-size:35px;
    margin: auto;
    width: 500px;
    :focus {
      outline: none;
    }
}
button {
    display:flex;
    margin: auto;
    margin-top: 40px;
    padding: 15px;
    width: 200px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    flex-direction: column;
    border-radius:15px;
    border: 1px solid gray;
    height: 40px;
    background-image: linear-gradient(to left, #F7E2FD, #1A52AE);
    
}
h1{
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #1A52AE, 0 0 3vw #1A52AE, 0 0 3vw #1A52AE;
    color:#F7E2FD;
    font-size: 74px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    
}
`

export const ContainerDetalhes = styled.div`
display: flex;
flex-direction: column;
align-items: center;
overflow: auto;
background-image: url(https://www.folhavitoria.com.br/entretenimento/blogs/na-balada/wp-content/uploads/2020/05/M%C3%BAsica-Quarentena-1.jpg);
width:150vh;
height: 98vh;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
h1{
    color:#F7E2FD;
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #0000ff, 0 0 3vw #0000ff, 0 0 3vw #0000ff;
}
h2 {
    margin-top: 40px;
    color:#F7E2FD;
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #0000ff, 0 0 3vw #0000ff, 0 0 3vw #0000ff;
}
`

export const Topzera = styled.button`

    display:flex;
    margin: 15px;
    margin-top: 40px;
    padding: 15px;
    width: 200px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    flex-direction: column;
    border-radius:15px;
    border: 1px solid gray;
    height: 40px;
    background-image: linear-gradient(to left, #F7E2FD, #0000ff);

`
export const Escrito = styled.h1`
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #0000ff, 0 0 3vw #0000ff, 0 0 3vw #0000ff;
    color:#F7E2FD;
    font-size: 74px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    

`
export const Imputo = styled.input`
    height: 40px;
    background:transparent;
    border: none;
    border-bottom: 1px solid white;
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    color:#F7E2FD;
    font-size:20px;
    margin: 15px;
    width: 500px;
    :focus {
      outline: none;
    }

`
export const CardUsuario = styled.div`
  background-image: linear-gradient(to left, #F7E2FD, #1A52AE);
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 1px solid black;
  padding: 12px;
  margin-bottom: 20px;
  flex-direction: left;
  font-size: 35px;
 `
export const Topzera1 = styled.button`
    margin-left: 65px;
    border: 2px solid gray;
    border-radius:15px;
    height: 35px;
    background-color: black;
    color: #F7E2FD;
    width: 100px;
`
export const Topone = styled.button`
display:flex;
    margin: 15px;
    margin-top: 40px;
    padding: 15px;
    width: 100px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    flex-direction: column;
    border-radius:15px;
    border: 0px solid gray;
    height: 35px;
    background-image: linear-gradient(to left, #F7E2FD, #0000ff);

`
export const Escrito1 = styled.h1`
    text-shadow: 1vw 1vw 1vw #000, 0 0 3vw #0000ff, 0 0 3vw #0000ff, 0 0 3vw #0000ff;
    color:#F7E2FD;
    font-size: 74px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;

`

export const Central = styled.div`
display: flex;
text-align: center;
flex-direction: column;
border: 10px solid white;
border-radius:15px;
background-image: url(https://elegirhoy.com/uploads/fichas-eventos-imagenes/music98b0ccb4.jpg) ;
background-repeat: no-repeat;
position: relative ;
background-position: center,center;
height: 96vh;
width: 95vw;
padding: 5px;


`




export default styled;
