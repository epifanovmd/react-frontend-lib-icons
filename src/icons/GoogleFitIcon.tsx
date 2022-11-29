import React, { FC, memo } from 'react';
import GoogleFitSvg from '../svg/google-fit.svg';

export interface IGoogleFitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleFitIcon: FC<IGoogleFitIconProps> = memo(props => {
  return <GoogleFitSvg {...props} />;
});
