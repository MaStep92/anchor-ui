import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../avatar';
import getStyles from './get-styles';
import styles from './styles';

function MessageHeader({ compact, myMessage, avatar, fontSize, headerStyle, username }) {
  return (
    <div style={styles.container}>
      {
        compact
        ? null
        : <div style={getStyles.arrow(myMessage)} />
      }
      {avatar && !compact ? <Avatar image={avatar} style={getStyles.avatar(myMessage)} /> : null}
      <header
        style={
          getStyles.header(myMessage, compact, fontSize, headerStyle)
        }
      >
        {username}
      </header>
    </div>
  );
}

MessageHeader.propTypes = {
  avatar: PropTypes.string,
  compact: PropTypes.bool,
  myMessage: PropTypes.bool,
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  headerStyle: PropTypes.instanceOf(Object),
  username: PropTypes.string.isRequired
};

MessageHeader.defaultProps = {
  avatar: '',
  headerStyle: {},
  fontSize: 'small',
  myMessage: false,
  compact: false
};

export default MessageHeader;