import React, { FC, memo } from 'react';
import TextBoxMultipleSvg from '../svg/text-box-multiple.svg';

export interface ITextBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxMultipleIcon: FC<ITextBoxMultipleIconProps> = memo(props => {
  return <TextBoxMultipleSvg {...props} />;
});
