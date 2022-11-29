import React, { FC, memo } from 'react';
import CloudRefreshOutlineSvg from '../svg/cloud-refresh-outline.svg';

export interface ICloudRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudRefreshOutlineIcon: FC<ICloudRefreshOutlineIconProps> = memo(props => {
  return <CloudRefreshOutlineSvg {...props} />;
});
