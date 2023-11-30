import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = () => { 

const  times =  [
    'Programacao',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovacao e Gestão'
]

return(
    <section className='formulario'>
        <form>  
            <h2>Preencha os dados para criar o  Card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome"/>
        <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem"/>
        <ListaSuspensa label="Time" itens={times} />
        </form>
    </section>
    )
}

export default Formulario