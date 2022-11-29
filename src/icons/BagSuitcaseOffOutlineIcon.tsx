import React, { FC, memo } from 'react';
import BagSuitcaseOffOutlineSvg from '../svg/bag-suitcase-off-outline.svg';

export interface IBagSuitcaseOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagSuitcaseOffOutlineIcon: FC<IBagSuitcaseOffOutlineIconProps> = memo(props => {
  return <BagSuitcaseOffOutlineSvg {...props} />;
});
