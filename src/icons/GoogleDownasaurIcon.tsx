import React, { FC, memo } from 'react';
import GoogleDownasaurSvg from '../svg/google-downasaur.svg';

export interface IGoogleDownasaurIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleDownasaurIcon: FC<IGoogleDownasaurIconProps> = memo(props => {
  return <GoogleDownasaurSvg {...props} />;
});
