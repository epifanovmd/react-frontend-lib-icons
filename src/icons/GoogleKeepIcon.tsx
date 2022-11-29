import React, { FC, memo } from 'react';
import GoogleKeepSvg from '../svg/google-keep.svg';

export interface IGoogleKeepIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleKeepIcon: FC<IGoogleKeepIconProps> = memo(props => {
  return <GoogleKeepSvg {...props} />;
});
