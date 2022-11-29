import React, { FC, memo } from 'react';
import TextBoxMinusOutlineSvg from '../svg/text-box-minus-outline.svg';

export interface ITextBoxMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxMinusOutlineIcon: FC<ITextBoxMinusOutlineIconProps> = memo(props => {
  return <TextBoxMinusOutlineSvg {...props} />;
});
