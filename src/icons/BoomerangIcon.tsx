import React, { FC, memo } from 'react';
import BoomerangSvg from '../svg/boomerang.svg';

export interface IBoomerangIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomerangIcon: FC<IBoomerangIconProps> = memo(props => {
  return <BoomerangSvg {...props} />;
});
