import React, { FC, memo } from 'react';
import TaxiSvg from '../svg/taxi.svg';

export interface ITaxiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TaxiIcon: FC<ITaxiIconProps> = memo(props => {
  return <TaxiSvg {...props} />;
});
