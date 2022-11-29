import React, { FC, memo } from 'react';
import LifebuoySvg from '../svg/lifebuoy.svg';

export interface ILifebuoyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LifebuoyIcon: FC<ILifebuoyIconProps> = memo(props => {
  return <LifebuoySvg {...props} />;
});
