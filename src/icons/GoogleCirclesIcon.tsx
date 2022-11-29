import React, { FC, memo } from 'react';
import GoogleCirclesSvg from '../svg/google-circles.svg';

export interface IGoogleCirclesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleCirclesIcon: FC<IGoogleCirclesIconProps> = memo(props => {
  return <GoogleCirclesSvg {...props} />;
});
