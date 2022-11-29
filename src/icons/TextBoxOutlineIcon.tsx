import React, { FC, memo } from 'react';
import TextBoxOutlineSvg from '../svg/text-box-outline.svg';

export interface ITextBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxOutlineIcon: FC<ITextBoxOutlineIconProps> = memo(props => {
  return <TextBoxOutlineSvg {...props} />;
});
