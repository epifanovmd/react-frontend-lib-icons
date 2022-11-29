import React, { FC, memo } from 'react';
import HomeCityOutlineSvg from '../svg/home-city-outline.svg';

export interface IHomeCityOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeCityOutlineIcon: FC<IHomeCityOutlineIconProps> = memo(props => {
  return <HomeCityOutlineSvg {...props} />;
});
