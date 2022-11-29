import React, { FC, memo } from 'react';
import BabyBottleOutlineSvg from '../svg/baby-bottle-outline.svg';

export interface IBabyBottleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BabyBottleOutlineIcon: FC<IBabyBottleOutlineIconProps> = memo(props => {
  return <BabyBottleOutlineSvg {...props} />;
});
