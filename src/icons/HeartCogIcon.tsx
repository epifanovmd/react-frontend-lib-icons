import React, { FC, memo } from 'react';
import HeartCogSvg from '../svg/heart-cog.svg';

export interface IHeartCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartCogIcon: FC<IHeartCogIconProps> = memo(props => {
  return <HeartCogSvg {...props} />;
});
