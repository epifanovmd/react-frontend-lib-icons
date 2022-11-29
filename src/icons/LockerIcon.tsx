import React, { FC, memo } from 'react';
import LockerSvg from '../svg/locker.svg';

export interface ILockerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockerIcon: FC<ILockerIconProps> = memo(props => {
  return <LockerSvg {...props} />;
});
