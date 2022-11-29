import React, { FC, memo } from 'react';
import HandBackRightSvg from '../svg/hand-back-right.svg';

export interface IHandBackRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandBackRightIcon: FC<IHandBackRightIconProps> = memo(props => {
  return <HandBackRightSvg {...props} />;
});
