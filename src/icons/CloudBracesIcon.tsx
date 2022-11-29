import React, { FC, memo } from 'react';
import CloudBracesSvg from '../svg/cloud-braces.svg';

export interface ICloudBracesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudBracesIcon: FC<ICloudBracesIconProps> = memo(props => {
  return <CloudBracesSvg {...props} />;
});
