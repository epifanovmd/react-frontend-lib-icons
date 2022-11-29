import React, { FC, memo } from 'react';
import HandBackLeftSvg from '../svg/hand-back-left.svg';

export interface IHandBackLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandBackLeftIcon: FC<IHandBackLeftIconProps> = memo(props => {
  return <HandBackLeftSvg {...props} />;
});
