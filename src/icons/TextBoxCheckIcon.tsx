import React, { FC, memo } from 'react';
import TextBoxCheckSvg from '../svg/text-box-check.svg';

export interface ITextBoxCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextBoxCheckIcon: FC<ITextBoxCheckIconProps> = memo(props => {
  return <TextBoxCheckSvg {...props} />;
});
