import React, { FC, memo } from 'react';
import LongitudeSvg from '../svg/longitude.svg';

export interface ILongitudeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LongitudeIcon: FC<ILongitudeIconProps> = memo(props => {
  return <LongitudeSvg {...props} />;
});
