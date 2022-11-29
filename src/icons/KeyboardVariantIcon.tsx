import React, { FC, memo } from 'react';
import KeyboardVariantSvg from '../svg/keyboard-variant.svg';

export interface IKeyboardVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyboardVariantIcon: FC<IKeyboardVariantIconProps> = memo(props => {
  return <KeyboardVariantSvg {...props} />;
});
