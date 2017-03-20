import React, { Component, PropTypes, createElement, cloneElement } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import styles from './styles';
import combineStyles from '../internal/combine-styles';

function getTabContentStyle(selected) {
  let style = styles.tabContent;

  if (selected) {
    style = combineStyles(style, { display: 'block' });
  }

  return style;
}

class Tabs extends Component {
  static displayName = 'Tabs'

  static propTypes = {
    /** The Tabs's content (Tab) */
    children: PropTypes.node.isRequired,
    /** Override the styles of the root element */
    style: PropTypes.instanceOf(Object)
  }

  static defaultProps = {
    style: {},
  }

  static contextTypes = {
    color: PropTypes.string
  }

  constructor() {
    super();

    this.state = {
      value: 0
    };

    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(value) {
    this.setState({
      value
    });
  }

  render() {
    const { children, style } = this.props;
    const { value } = this.state;
    const tabContent = [];

    const tabs = children.map((tab, index) => {
      tabContent.push(
        createElement(
          'div', {
            style: getTabContentStyle(index === value)
          },
          tab.props.children
        )
      );

      return cloneElement(
        tab,
        {
          selected: index === value,
          onClick: () => this.toggleTab(index)
        }
      );
    });

    return (
      <section style={style}>
        <section>
          {tabs}
        </section>
        <section>
          {tabContent}
        </section>
      </section>
    );
  }
}

export default pure(Radium(Tabs));
