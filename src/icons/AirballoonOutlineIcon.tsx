import React, { FC, memo } from 'react';
import AirballoonOutlineSvg from '../svg/airballoon-outline.svg';

export interface IAirballoonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirballoonOutlineIcon: FC<IAirballoonOutlineIconProps> = memo(props => {
  return <AirballoonOutlineSvg {...props} />;
});
