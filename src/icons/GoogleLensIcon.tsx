import React, { FC, memo } from 'react';
import GoogleLensSvg from '../svg/google-lens.svg';

export interface IGoogleLensIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleLensIcon: FC<IGoogleLensIconProps> = memo(props => {
  return <GoogleLensSvg {...props} />;
});
