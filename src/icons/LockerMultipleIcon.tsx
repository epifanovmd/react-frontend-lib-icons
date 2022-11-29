import React, { FC, memo } from 'react';
import LockerMultipleSvg from '../svg/locker-multiple.svg';

export interface ILockerMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockerMultipleIcon: FC<ILockerMultipleIconProps> = memo(props => {
  return <LockerMultipleSvg {...props} />;
});
