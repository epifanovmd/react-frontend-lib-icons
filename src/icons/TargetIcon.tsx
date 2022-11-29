import React, { FC, memo } from 'react';
import TargetSvg from '../svg/target.svg';

export interface ITargetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TargetIcon: FC<ITargetIconProps> = memo(props => {
  return <TargetSvg {...props} />;
});
