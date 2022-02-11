import React from "react"
import axios from "axios"
import styled from "styled-components"
import DetalharPlayList from "./DetalharPlayList"
import { CardUsuario, Topzera1, Topone, Escrito1, Central } from "./StyledCompo"






class ListaDePlayList extends React.Component {
    state = {
        playList: [],
        paginaDetalhe: false,
        playListSelect: ""

    }
    pegarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios.get(url, {
            headers: {
                Authorization: "bruno-luan-banu"
            }

        })
            .then((res) => {
                this.setState({ playList: res.data.result.list })
            })
            .catch((err) => {
                alert("Ocorreu um problema, tente novamente!")
            })
    }
    componentDidMount() {
        this.pegarUsuario()
    }


    deletarUsuario = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "bruno-luan-banu"
            }

        })
            .then((res) => {
                alert("Usuario deletado com sucesso")
                this.pegarUsuario()
            })
            .catch((err) => {
                alert("Ocorreu um erro tente novamente")
            })
    }

    renderizaPaginaDetalhe = (playboy) => {
        this.setState({ paginaDetalhe: true, playListSelect: playboy })
    };

    renderizarPaginaVoltar = () => {
        this.setState({ paginaDetalhe: false })
    };

    render() {

        if (this.state.paginaDetalhe) {
            return (
                <DetalharPlayList
                    renderizarPaginaVoltar={this.renderizarPaginaVoltar}
                    playListSelect={this.state.playListSelect}
                />

            );
        }
        const listaUsuarios = this.state.playList.map((playlist) => {
            return (
                <CardUsuario key={playlist.id}>
                    {playlist.name}
                    <Topzera1 onClick={() => this.deletarUsuario(playlist.id)}> Deletar </Topzera1>
                    <Topzera1 onClick={() => this.renderizaPaginaDetalhe(playlist)}> Mostar Mais </Topzera1>

                </CardUsuario>)


        })
        return (
            <Central>


                <Escrito1>Listas</Escrito1>
                {listaUsuarios}
                <Topone onClick={this.props.irParaCriar}>Inicio</Topone>
            </Central>

        )
    }
}

export default ListaDePlayList;