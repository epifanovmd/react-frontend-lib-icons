import React, { FC, memo } from 'react';
import SprayBottleSvg from '../svg/spray-bottle.svg';

export interface ISprayBottleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SprayBottleIcon: FC<ISprayBottleIconProps> = memo(props => {
  return <SprayBottleSvg {...props} />;
});
