import React, { FC, memo } from 'react';
import HandBackLeftOffSvg from '../svg/hand-back-left-off.svg';

export interface IHandBackLeftOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandBackLeftOffIcon: FC<IHandBackLeftOffIconProps> = memo(props => {
  return <HandBackLeftOffSvg {...props} />;
});
