import React from "react";
import axios from "axios"

import { ContainerDetalhes, Imputo, Topzera, Escrito, } from "./StyledCompo"




class DetalharPlayList extends React.Component {
    state = {
        name: "",
        artist: "",
        url: "",
        listaDeMusica: []
    }

    detalhaPlay = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListSelect.id}/tracks`

        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url,
        }

        axios.post(url, body, {
            headers: {
                authorization: "bruno-luan-banu"
            }


        })
            .then((res) => {
                alert("A música foi adicionada com sucesso!")
                this.setState({ name: "", artist: "", url: "" })
                this.pegarMusicaPlaylist()
            })
            .catch((err) => {
                alert(err.response.data.message)

            })
    }
    onChangeInputName = (e) => {
        this.setState({ name: e.target.value })
    };
    onChangeInputArtista = (e) => {
        this.setState({ artist: e.target.value })
    };
    onChangeInputUrl = (e) => {
        this.setState({ url: e.target.value })
    }

    pegarMusicaPlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playListSelect.id}/tracks`

        axios.get(url, {
            headers: {
                authorization: "bruno-luan-banu"
            }


        })
            .then((res) => {
                this.setState({ listaDeMusica: res.data.result.tracks })
                this.pegarMusicaPlaylist()
            })
            .catch((err) => {
                alert(err.response.data.message)

            })
    }
    componentDidMount() {
        this.pegarMusicaPlaylist()
    }

    render() {
        const retornarMusica = this.state.listaDeMusica.map((musicas) => {
            return (<div key={musicas.id}>
                <p>{musicas.name}</p>
                <p>{musicas.artist}</p>
                <p><audio controls src={musicas.url} /></p>

            </div>)
        })
        return (

            <ContainerDetalhes>
                <Escrito>Musicas</Escrito>

                <Imputo
                    placeholder="Nome da Musica"
                    value={this.state.name}
                    onChange={this.onChangeInputName} />
                <Imputo
                    placeholder="Artista"
                    value={this.state.artist}
                    onChange={this.onChangeInputArtista} />
                <Imputo
                    placeholder="Url"
                    value={this.state.url}
                    onChange={this.onChangeInputUrl} />


                <Topzera onClick={this.detalhaPlay}> Adicionar Música </Topzera>
                <Topzera onClick={this.props.renderizarPaginaVoltar}>Voltar Para Lista </Topzera>
                {retornarMusica}
            </ContainerDetalhes>

        )
    }
}

export default DetalharPlayList;