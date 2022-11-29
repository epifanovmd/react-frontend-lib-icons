import React, { FC, memo } from 'react';
import CampfireSvg from '../svg/campfire.svg';

export interface ICampfireIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CampfireIcon: FC<ICampfireIconProps> = memo(props => {
  return <CampfireSvg {...props} />;
});
