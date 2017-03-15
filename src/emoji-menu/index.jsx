import React, { Component, PropTypes } from 'react';
import emojione from 'emojione';
import _ from 'lodash';
import Radium from 'radium';
import emojis from './emoji';
import EmojiCategory from './emoji-category';
import EmojiModifiers from './emoji-modifiers';
import EmojiCategories from './emoji-categories';
import Storage from './storage';
import colors from '../settings/colors';
import styles from './styles';
import combineStyles from '../internal/combine-styles';

const storage = new Storage();

class EmojiMenu extends Component {
  static displayName = 'EmojiMenu'

  static propTypes = {
    /** Path to svg sprites */
    svgSprites: PropTypes.string,
    /** Send an emoji */
    sendEmoji: PropTypes.func.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object),
    /** Override the styles of the header element */
    headerStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the color modifiers */
    modifierStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the emoji category */
    categoryStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the emojis */
    emojiStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the footer element */
    footerStyle: PropTypes.instanceOf(Object),
    /** Override the styles of the footer icons */
    iconStyle: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    svgSprites: '',
    style: {},
    headerStyle: {},
    modifierStyle: {},
    categoryStyle: {},
    emojiStyle: {},
    footerStyle: {},
    iconStyle: {}
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor(props) {
    super(props);

    if (props.svgSprites) {
      emojione.imageType = 'svg';
      emojione.sprites = true;
      emojione.imagePathSVGSprites = props.svgSprites;
    }

    const storedEmojis = storage.getEmojis();

    this.state = {
      tone: 'tone0',
      storedEmojis: storedEmojis || [],
      category: 'people'
    };

    this.changeTone = this.changeTone.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.sendEmoji = this.sendEmoji.bind(this);
  }

  changeTone(tone) {
    this.setState({
      tone
    });
  }

  changeCategory(category) {
    this.setState({
      category
    });
  }

  sendEmoji(emoji) {
    const { sendEmoji } = this.props;

    storage.storeEmoji(emoji);
    sendEmoji(emoji);

    const storedEmojis = storage.getEmojis();

    this.setState({
      storedEmojis: storedEmojis || []
    });
  }

  render() {
    const { tone, storedEmojis, category } = this.state;
    const { color } = this.context;
    const {
      style, headerStyle, modifierStyle, categoryStyle, emojiStyle, footerStyle, iconStyle
    } = this.props;

    const activeColor = color || colors.theme;

    const modifiers = _.filter(emojis, { category: 'modifier' });

    const filteredEmoji = _.chain(emojis).filter({ category }).filter((emoji) => {
      if (_.includes(emoji.title, 'tone')) {
        return _.includes(emoji.title, tone);
      }

      return true;
    }).value();

    return (
      <section style={combineStyles(styles.container, style)}>
        <EmojiModifiers
          modifiers={modifiers}
          changeTone={this.changeTone}
          tone={tone}
          style={headerStyle}
          modifierStyle={modifierStyle}
        />
        {
          storedEmojis.length > 0 && category === 'recent'
          ? <EmojiCategory
            emojis={storedEmojis}
            category="recent"
            sendEmoji={this.sendEmoji}
            style={categoryStyle}
            emojiStyle={emojiStyle}
          />
          : null
        }
        {
          category !== 'recent'
          ? <EmojiCategory
            emojis={filteredEmoji}
            category={category}
            sendEmoji={this.sendEmoji}
            style={categoryStyle}
            emojiStyle={emojiStyle}
          />
          : null
        }
        <EmojiCategories
          changeCategory={this.changeCategory}
          category={category}
          activeColor={activeColor}
          recent={storedEmojis.length > 0}
          style={footerStyle}
          iconStyle={iconStyle}
        />
      </section>
    );
  }
}

export default Radium(EmojiMenu);