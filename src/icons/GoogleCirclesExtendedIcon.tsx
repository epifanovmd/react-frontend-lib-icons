import React, { FC, memo } from 'react';
import GoogleCirclesExtendedSvg from '../svg/google-circles-extended.svg';

export interface IGoogleCirclesExtendedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleCirclesExtendedIcon: FC<IGoogleCirclesExtendedIconProps> = memo(props => {
  return <GoogleCirclesExtendedSvg {...props} />;
});
