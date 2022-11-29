import React, { FC, memo } from 'react';
import BulletSvg from '../svg/bullet.svg';

export interface IBulletIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BulletIcon: FC<IBulletIconProps> = memo(props => {
  return <BulletSvg {...props} />;
});
