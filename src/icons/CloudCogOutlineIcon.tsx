import React, { FC, memo } from 'react';
import CloudCogOutlineSvg from '../svg/cloud-cog-outline.svg';

export interface ICloudCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudCogOutlineIcon: FC<ICloudCogOutlineIconProps> = memo(props => {
  return <CloudCogOutlineSvg {...props} />;
});
