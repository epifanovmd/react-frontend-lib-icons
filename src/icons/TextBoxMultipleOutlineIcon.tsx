import React, { FC, memo } from 'react';
import TextBoxMultipleOutlineSvg from '../svg/text-box-multiple-outline.svg';

export interface ITextBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxMultipleOutlineIcon: FC<ITextBoxMultipleOutlineIconProps> = memo(props => {
  return <TextBoxMultipleOutlineSvg {...props} />;
});
