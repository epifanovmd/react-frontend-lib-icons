import React, { FC, memo } from 'react';
import CitySvg from '../svg/city.svg';

export interface ICityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CityIcon: FC<ICityIconProps> = memo(props => {
  return <CitySvg {...props} />;
});
