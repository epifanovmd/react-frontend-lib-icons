import React, { FC, memo } from 'react';
import OpenInAppSvg from '../svg/open-in-app.svg';

export interface IOpenInAppIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OpenInAppIcon: FC<IOpenInAppIconProps> = memo(props => {
  return <OpenInAppSvg {...props} />;
});
