import React, { FC, memo } from 'react';
import BabyBottleSvg from '../svg/baby-bottle.svg';

export interface IBabyBottleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BabyBottleIcon: FC<IBabyBottleIconProps> = memo(props => {
  return <BabyBottleSvg {...props} />;
});
