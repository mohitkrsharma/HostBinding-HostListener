import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  possibleColors = [
    'red',
    'blue',
    'green',
    'purple',
    'grey',
    'pink',
    'magenta',
    'orange',
    'olive',
  ];
  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') borderColor!: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }
  constructor() {}
}
