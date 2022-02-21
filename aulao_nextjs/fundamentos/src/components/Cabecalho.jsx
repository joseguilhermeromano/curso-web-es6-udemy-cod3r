export default function Cabecalho(props) {

    //props é somente leitura
    //props.titulo += "!!!!!" // RESULTA EM ERRRO

    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}