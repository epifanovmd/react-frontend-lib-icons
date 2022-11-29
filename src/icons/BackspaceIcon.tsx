import React, { FC, memo } from 'react';
import BackspaceSvg from '../svg/backspace.svg';

export interface IBackspaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BackspaceIcon: FC<IBackspaceIconProps> = memo(props => {
  return <BackspaceSvg {...props} />;
});
