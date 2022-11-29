import React, { FC, memo } from 'react';
import HandBackRightOffOutlineSvg from '../svg/hand-back-right-off-outline.svg';

export interface IHandBackRightOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandBackRightOffOutlineIcon: FC<IHandBackRightOffOutlineIconProps> = memo(props => {
  return <HandBackRightOffOutlineSvg {...props} />;
});
