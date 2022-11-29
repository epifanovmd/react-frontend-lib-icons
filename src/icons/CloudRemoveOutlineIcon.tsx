import React, { FC, memo } from 'react';
import CloudRemoveOutlineSvg from '../svg/cloud-remove-outline.svg';

export interface ICloudRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudRemoveOutlineIcon: FC<ICloudRemoveOutlineIconProps> = memo(props => {
  return <CloudRemoveOutlineSvg {...props} />;
});
