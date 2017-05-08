import React from 'react';

const IMAGE_URL = encodeURI('http://stats.nba.com/media/players/132x132/');

export default (props) => {
  const { player, addPlayerCareerData, clearSearchTerm } = props;

  const handleAddPlayer = () => {
    addPlayerCareerData(player.id);
    clearSearchTerm();
  }

  return (
    <div className="rc-players-search-result media">
      <div className="media-left">
        <img className="media-object" src={ `${IMAGE_URL}${player.id}.png` } />
      </div>
      <div className="media-body">
        <div>
          <h4 className="media-heading">{ player.name }</h4>
          <div>{ player.teamLocation } { player.teamName }</div>
        </div>

        <button onClick={ handleAddPlayer } className="btn btn-primary">Add</button>
      </div>
    </div>
  );
}
