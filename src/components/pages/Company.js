import styles from './Company.module.css'
import react from '../../img/react.png'
import js from '../../img/js.png'
import html from '../../img/html.png'
import css from '../../img/css.png'


function Company() {
    return (
        
        <div>
            <h1>Sobre Nós</h1>
        
            <div className={styles.company_container}>

            <p>A Pereira tecnologias é uma empresa de desenvolvimento de software e se distingue em cada um dos projetos executados. 
                Sempre atentos às novas tecnologias, possuímos uma equipe altamente especializada, formada por profissionais em constante 
                processo de busca de novos conhecimentos, de aprendizado e de atualização em áreas de gestão de informações. 
                Além de uma sólida formação nas áreas de Tecnologia da Informação, temos uma vasta experiência prática na geração de 
                instrumentos de apoio para médias e grandes empresas. Situados na cidade de Criciúma/RS, dispomos da capacidade para atender 
                todo o estado. Também firmamos parceria com profissionais de outras organizações e áreas para garantir que cada projeto 
                entregue beneficie ao máximo nossos clientes.</p>

                
                <h1> Principais Tecnologias</h1>

                <div>

                    <img src={react} alt="React" />
                    <img src={js} alt="JavaScript" />
                    <img src={html} alt="HTML" />
                    <img src={css} alt="CSS" />

                </div>
  
      </div>
      
      </div>
    )
}

export default Company