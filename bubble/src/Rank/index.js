import React from 'react';
import Header from '../Feed/Header'
import RankItem from './RankItem'
import './ranking.css';
const { userLogged } = require('../Firebase');

class Ranking extends React.Component {

  render(){
    return (

        <>
          {
            userLogged(user => {
              if(user){
                return (
                  <>
                    <div className="ranking modal">
                      <div className="overflow">
                      
                        <Header />

                        <h1> Ranking do Ciclo </h1>
                        
                        <div className="ranking__list">

                          <RankItem position={1} name="Larissa Flores" score={1000}  type={1} />
                          <RankItem position={2} name="Thales" score={750}  type={1} />
                          <RankItem position={3} name="Renan" score={600}  type={2} />
                          <RankItem position={4} name="Ronaldinho" score={500}  type={2} />
                          <RankItem position={5} name="Marta" score={300}  type={2} />
                          <RankItem position={6} name="Xuxa" score={200}  type={2} />
                          <RankItem position={7} name="Michael Jackson" score={100}  type={2} />
                          <RankItem position={8} name="Toto" score={50}  type={3} />
                          <RankItem position={9} name="Ibrahimovic" score={20}  type={3} />
                          <RankItem position={10} name="Obama" score={10}  type={3} />

                        </div>
                        
                      </div>
                    </div>
                  </>
                )
              }
            })
          }
      </>
      
    );
  }
  
}

export default Ranking;
