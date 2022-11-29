import React, { FC, memo } from 'react';
import TextBoxSvg from '../svg/text-box.svg';

export interface ITextBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxIcon: FC<ITextBoxIconProps> = memo(props => {
  return <TextBoxSvg {...props} />;
});
