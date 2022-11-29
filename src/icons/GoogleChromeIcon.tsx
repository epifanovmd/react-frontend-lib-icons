import React, { FC, memo } from 'react';
import GoogleChromeSvg from '../svg/google-chrome.svg';

export interface IGoogleChromeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleChromeIcon: FC<IGoogleChromeIconProps> = memo(props => {
  return <GoogleChromeSvg {...props} />;
});
