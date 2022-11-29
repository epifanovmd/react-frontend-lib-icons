import React, { FC, memo } from 'react';
import CloudCogSvg from '../svg/cloud-cog.svg';

export interface ICloudCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudCogIcon: FC<ICloudCogIconProps> = memo(props => {
  return <CloudCogSvg {...props} />;
});
