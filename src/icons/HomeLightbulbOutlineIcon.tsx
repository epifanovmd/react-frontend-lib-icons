import React, { FC, memo } from 'react';
import HomeLightbulbOutlineSvg from '../svg/home-lightbulb-outline.svg';

export interface IHomeLightbulbOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeLightbulbOutlineIcon: FC<IHomeLightbulbOutlineIconProps> = memo(props => {
  return <HomeLightbulbOutlineSvg {...props} />;
});
