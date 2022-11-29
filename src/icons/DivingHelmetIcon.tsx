import React, { FC, memo } from 'react';
import DivingHelmetSvg from '../svg/diving-helmet.svg';

export interface IDivingHelmetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DivingHelmetIcon: FC<IDivingHelmetIconProps> = memo(props => {
  return <DivingHelmetSvg {...props} />;
});
