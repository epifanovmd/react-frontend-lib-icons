import React, { FC, memo } from 'react';
import GoogleCloudSvg from '../svg/google-cloud.svg';

export interface IGoogleCloudIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleCloudIcon: FC<IGoogleCloudIconProps> = memo(props => {
  return <GoogleCloudSvg {...props} />;
});
