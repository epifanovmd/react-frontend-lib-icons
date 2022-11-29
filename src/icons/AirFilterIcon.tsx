import React, { FC, memo } from 'react';
import AirFilterSvg from '../svg/air-filter.svg';

export interface IAirFilterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirFilterIcon: FC<IAirFilterIconProps> = memo(props => {
  return <AirFilterSvg {...props} />;
});
