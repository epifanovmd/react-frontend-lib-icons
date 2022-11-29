import React, { FC, memo } from 'react';
import KettlebellSvg from '../svg/kettlebell.svg';

export interface IKettlebellIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KettlebellIcon: FC<IKettlebellIconProps> = memo(props => {
  return <KettlebellSvg {...props} />;
});
