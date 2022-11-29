import React, { FC, memo } from 'react';
import CloudSearchOutlineSvg from '../svg/cloud-search-outline.svg';

export interface ICloudSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudSearchOutlineIcon: FC<ICloudSearchOutlineIconProps> = memo(props => {
  return <CloudSearchOutlineSvg {...props} />;
});
