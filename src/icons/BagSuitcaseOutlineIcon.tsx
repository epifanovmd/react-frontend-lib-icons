import React, { FC, memo } from 'react';
import BagSuitcaseOutlineSvg from '../svg/bag-suitcase-outline.svg';

export interface IBagSuitcaseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagSuitcaseOutlineIcon: FC<IBagSuitcaseOutlineIconProps> = memo(props => {
  return <BagSuitcaseOutlineSvg {...props} />;
});
