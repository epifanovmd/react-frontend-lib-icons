import React, { FC, memo } from 'react';
import BagSuitcaseOffSvg from '../svg/bag-suitcase-off.svg';

export interface IBagSuitcaseOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagSuitcaseOffIcon: FC<IBagSuitcaseOffIconProps> = memo(props => {
  return <BagSuitcaseOffSvg {...props} />;
});
