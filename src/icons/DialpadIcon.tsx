import React, { FC, memo } from 'react';
import DialpadSvg from '../svg/dialpad.svg';

export interface IDialpadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DialpadIcon: FC<IDialpadIconProps> = memo(props => {
  return <DialpadSvg {...props} />;
});
