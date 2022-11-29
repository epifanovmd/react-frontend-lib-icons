import React, { FC, memo } from 'react';
import LatitudeSvg from '../svg/latitude.svg';

export interface ILatitudeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LatitudeIcon: FC<ILatitudeIconProps> = memo(props => {
  return <LatitudeSvg {...props} />;
});
