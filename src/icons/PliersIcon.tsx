import React, { FC, memo } from 'react';
import PliersSvg from '../svg/pliers.svg';

export interface IPliersIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PliersIcon: FC<IPliersIconProps> = memo(props => {
  return <PliersSvg {...props} />;
});
