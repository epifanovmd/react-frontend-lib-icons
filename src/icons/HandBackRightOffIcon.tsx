import React, { FC, memo } from 'react';
import HandBackRightOffSvg from '../svg/hand-back-right-off.svg';

export interface IHandBackRightOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandBackRightOffIcon: FC<IHandBackRightOffIconProps> = memo(props => {
  return <HandBackRightOffSvg {...props} />;
});
