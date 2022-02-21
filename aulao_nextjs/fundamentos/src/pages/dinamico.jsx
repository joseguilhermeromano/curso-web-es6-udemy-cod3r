import Layout from "../components/Layout";

export async function getServerSideProps() {

    return {
        props: {numero: Math.random()}
    }
}

function Dinamico({numero}) {

    return (
        <Layout titulo="Conteúdo Dinâmico">
            <div>{numero}</div>
        </Layout>
    )
}

export default Dinamico;