import React, { FC, memo } from 'react';
import GoogleCirclesGroupSvg from '../svg/google-circles-group.svg';

export interface IGoogleCirclesGroupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleCirclesGroupIcon: FC<IGoogleCirclesGroupIconProps> = memo(props => {
  return <GoogleCirclesGroupSvg {...props} />;
});
