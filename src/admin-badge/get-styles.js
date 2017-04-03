import styles from './styles';
import combineStyles from '../internal/combine-styles';
import colors from '../settings/colors';

function root(color = colors.theme, inverted, overrideStyle) {
  const style = combineStyles(styles.badge, { backgroundColor: color });
  const invertedStyle = combineStyles(styles.inverted, { color });

  if (inverted) {
    return combineStyles(combineStyles(style, invertedStyle), overrideStyle);
  }

  return combineStyles(style, overrideStyle);
}

export default {
  root
};
