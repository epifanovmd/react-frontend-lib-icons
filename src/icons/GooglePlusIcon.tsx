import React, { FC, memo } from 'react';
import GooglePlusSvg from '../svg/google-plus.svg';

export interface IGooglePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GooglePlusIcon: FC<IGooglePlusIconProps> = memo(props => {
  return <GooglePlusSvg {...props} />;
});
