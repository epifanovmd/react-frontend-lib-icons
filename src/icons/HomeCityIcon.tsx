import React, { FC, memo } from 'react';
import HomeCitySvg from '../svg/home-city.svg';

export interface IHomeCityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeCityIcon: FC<IHomeCityIconProps> = memo(props => {
  return <HomeCitySvg {...props} />;
});
