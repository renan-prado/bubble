import React from 'react';
import './ranking.css';

class RankItem extends React.Component {

  render(){

    const {position, name, score, type} = this.props;
    
    let typeClass;

    switch (type) {
      case 1:
        typeClass = '--high'
        break;
      case 2:
        typeClass = '--middle'
        break
      case 3:
        typeClass = '--low'
        break;
      default:
        typeClass = '--high'
        break;
    }

    return (

        <div className={`ranking__list-item ${typeClass}`}>

          <span>{position}º</span>
          <div className="ranking__list-item-image"></div>
          <h3> {name} </h3>
          <label> {score} pts</label>
        </div>

    );
  }
  
}

export default RankItem;
