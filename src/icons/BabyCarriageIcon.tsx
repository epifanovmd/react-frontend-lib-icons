import React, { FC, memo } from 'react';
import BabyCarriageSvg from '../svg/baby-carriage.svg';

export interface IBabyCarriageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BabyCarriageIcon: FC<IBabyCarriageIconProps> = memo(props => {
  return <BabyCarriageSvg {...props} />;
});
