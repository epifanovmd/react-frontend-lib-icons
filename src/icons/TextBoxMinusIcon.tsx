import React, { FC, memo } from 'react';
import TextBoxMinusSvg from '../svg/text-box-minus.svg';

export interface ITextBoxMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxMinusIcon: FC<ITextBoxMinusIconProps> = memo(props => {
  return <TextBoxMinusSvg {...props} />;
});
