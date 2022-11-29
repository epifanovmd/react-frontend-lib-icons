import React, { FC, memo } from 'react';
import TextBoxCheckOutlineSvg from '../svg/text-box-check-outline.svg';

export interface ITextBoxCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxCheckOutlineIcon: FC<ITextBoxCheckOutlineIconProps> = memo(props => {
  return <TextBoxCheckOutlineSvg {...props} />;
});
