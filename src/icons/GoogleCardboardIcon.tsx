import React, { FC, memo } from 'react';
import GoogleCardboardSvg from '../svg/google-cardboard.svg';

export interface IGoogleCardboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleCardboardIcon: FC<IGoogleCardboardIconProps> = memo(props => {
  return <GoogleCardboardSvg {...props} />;
});
