var React = require('react');

function PlayerPreview (props) {
  return (
    <div>
      <div className='column'>
        <img className='avatar' src={props.avatar} alt={'Avatar for ' + props.username} />
        <h2 className='username'>@{props.username}</h2>
      </div>
      {props.children}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
}

module.exports = PlayerPreview;