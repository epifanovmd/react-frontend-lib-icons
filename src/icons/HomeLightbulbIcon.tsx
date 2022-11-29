import React, { FC, memo } from 'react';
import HomeLightbulbSvg from '../svg/home-lightbulb.svg';

export interface IHomeLightbulbIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeLightbulbIcon: FC<IHomeLightbulbIconProps> = memo(props => {
  return <HomeLightbulbSvg {...props} />;
});
