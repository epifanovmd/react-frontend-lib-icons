import React, { FC, memo } from 'react';
import BagSuitcaseSvg from '../svg/bag-suitcase.svg';

export interface IBagSuitcaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagSuitcaseIcon: FC<IBagSuitcaseIconProps> = memo(props => {
  return <BagSuitcaseSvg {...props} />;
});
