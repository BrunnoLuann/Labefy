import React from "react";
import axios from "axios"
import styled from "styled-components";
import { ContainerCriaPlaylist } from "./StyledCompo"


class CriarPlayList extends React.Component {
    state = {
        nome: "",
    }
    handCriar = (e) => {
        this.setState({ nome: e.target.value })
    }

    fazerPlay = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const body = {
            name: this.state.nome,
            email: this.state.nome
        }

        axios.post(url, body, {
            headers: {
                authorization: "bruno-luan-banu"
            }


        })
            .then((res) => {
                alert("PlayList criada com sucesso!")
                this.setState({ nome: "", })
            })
            .catch((err) => {
                alert(err.response.data.message)

            })
        //  console.log(this.state)
    }

    render() {
        return (
            <ContainerCriaPlaylist>




                <h1>Criar Play List</h1>
                <input placeholder="Nome da Playlist"
                    placeholderTextColor="white"
                    value={this.state.nome}
                    onChange={this.handCriar}

                />
                <button onClick={this.fazerPlay}>Cadastrar</button>
                <button onClick={this.props.irParaLista}>Ir pra Lista</button>

            </ContainerCriaPlaylist>

        )
    }
}

export default CriarPlayList;