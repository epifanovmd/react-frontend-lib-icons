import React, { FC, memo } from 'react';
import GoogleGlassSvg from '../svg/google-glass.svg';

export interface IGoogleGlassIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleGlassIcon: FC<IGoogleGlassIconProps> = memo(props => {
  return <GoogleGlassSvg {...props} />;
});
