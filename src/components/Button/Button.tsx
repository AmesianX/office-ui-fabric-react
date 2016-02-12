import * as React from 'react';
import './Button.scss';

export enum ButtonType {
  normal,
  primary,
  hero,
  compound,
  command
}

export interface IButtonProps {
  children?: any;
  type?: ButtonType;
  description?: string;
  onClick?: (ev?: any) => void;
}

export const ButtonProps = [
  { name: 'children', type: 'node', defaultValue: '', description: 'Children to be rendered within the button.' },
  { name: 'type', type: 'ButtonType', defaultValue: 'ButtonType.normal', description: 'The type of the button to render. { normal, primary, hero, compound, command }' },
  { name: 'description', type: 'node', defaultValue: '', description: 'TODO' },
  { name: 'onClick', type: 'function ()', defaultValue: '', description: 'Function to call when the button is clicked.' }
];

export default class Button extends React.Component<IButtonProps, any> {
  public static defaultProps: IButtonProps = {
    type: ButtonType.normal
  };

  public render() {
    let { type, children, description, onClick } = this.props;
    let rootClass = 'ms-Button'
      + (type === ButtonType.primary ? ' ms-Button--primary' : '')
      + (type === ButtonType.hero ? ' ms-Button--hero' : '')
      + (type === ButtonType.compound ? ' ms-Button--compound' : '')
      + (type === ButtonType.command ? ' ms-Button--command' : '');

    let iconSpan;
    if (type === ButtonType.command || type === ButtonType.hero) {
      iconSpan = <span className="ms-Button-icon"><i className="ms-Icon ms-Icon--plus"></i></span>;
    }

    let descriptionSpan;
    if (ButtonType.compound) {
      descriptionSpan = <span className="ms-Button-description">{ description }</span>;
    }

    return (
      <button className={ rootClass } onClick={ onClick }>
        { iconSpan }
        <span className="ms-Button-label">{ children }</span>
        { descriptionSpan }
      </button>
    );
  }

}