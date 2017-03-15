/* eslint-env mocha */
import { expect } from 'chai';
import getPopOverPosition from '../../src/internal/get-pop-over-position';

describe('getPopOverPosition', () => {
  before(() => {
    global.window = {
      innerWidth: 900,
      innerHeight: 680
    };
  });

  after(() => {
    delete global.window;
  });

  it('should position popOver left from and below button', () => {
    const button = {
      bottom: 48,
      height: 40,
      left: 856,
      right: 896,
      top: 8,
      width: 40
    };
    const popOver = {
      bottom: 303,
      height: 255,
      left: 676,
      right: 876,
      top: 48,
      width: 200
    };
    const position = getPopOverPosition(button, popOver);

    expect(position.position).to.equal('fixed');
    expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
    expect(position.top).to.equal(48);
    expect(position.right).to.equal(24);
    expect(position.bottom).to.equal('initial');
    expect(position.left).to.equal('initial');
  });

  it('should position popOver right from and below button', () => {
    const button = {
      bottom: 48,
      height: 40,
      left: 4,
      right: 44,
      top: 8,
      width: 40
    };
    const popOver = {
      bottom: 303,
      height: 255,
      left: 24,
      right: 224,
      top: 48,
      width: 200
    };
    const position = getPopOverPosition(button, popOver);

    expect(position.position).to.equal('fixed');
    expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
    expect(position.top).to.equal(48);
    expect(position.right).to.equal('initial');
    expect(position.bottom).to.equal('initial');
    expect(position.left).to.equal(24);
  });

  it('should position popOver right from and above button', () => {
    const button = {
      bottom: 672,
      height: 40,
      left: 4,
      right: 44,
      top: 632,
      width: 40
    };
    const popOver = {
      bottom: 632,
      height: 255,
      left: 24,
      right: 224,
      top: 377,
      width: 200
    };
    const position = getPopOverPosition(button, popOver);

    expect(position.position).to.equal('fixed');
    expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
    expect(position.top).to.equal('initial');
    expect(position.right).to.equal('initial');
    expect(position.bottom).to.equal(48);
    expect(position.left).to.equal(24);
  });

  it('should position popOver right from and below button', () => {
    const button = {
      bottom: 48,
      height: 40,
      left: 4,
      right: 44,
      top: 8,
      width: 40
    };
    const popOver = {
      bottom: 303,
      height: 255,
      left: 24,
      right: 224,
      top: 48,
      width: 200
    };
    const position = getPopOverPosition(button, popOver);

    expect(position.position).to.equal('fixed');
    expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
    expect(position.top).to.equal(48);
    expect(position.right).to.equal('initial');
    expect(position.bottom).to.equal('initial');
    expect(position.left).to.equal(24);
  });

  it('should position popOver left from and above button', () => {
    const button = {
      bottom: 672,
      height: 40,
      left: 856,
      right: 896,
      top: 632,
      width: 40
    };
    const popOver = {
      bottom: 632,
      height: 255,
      left: 24,
      right: 224,
      top: 377,
      width: 200
    };
    const position = getPopOverPosition(button, popOver);

    expect(position.position).to.equal('fixed');
    expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
    expect(position.top).to.equal('initial');
    expect(position.right).to.equal(24);
    expect(position.bottom).to.equal(48);
    expect(position.left).to.equal('initial');
  });

  it('should position popOver above or below button if type equals select', () => {
    const button = {
      bottom: 672,
      height: 40,
      left: 856,
      right: 896,
      top: 632,
      width: 40
    };
    const popOver = {
      bottom: 632,
      height: 255,
      left: 24,
      right: 224,
      top: 377,
      width: 200
    };
    const position = getPopOverPosition(button, popOver, 'select');

    expect(position.position).to.equal('fixed');
    expect(position).to.have.all.keys('position', 'top', 'right', 'bottom', 'left');
    expect(position.right).to.equal('initial');
    expect(position.left).to.equal('initial');
  });
});