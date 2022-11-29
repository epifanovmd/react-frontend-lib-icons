import React, { FC, memo } from 'react';
import CloudRemoveSvg from '../svg/cloud-remove.svg';

export interface ICloudRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudRemoveIcon: FC<ICloudRemoveIconProps> = memo(props => {
  return <CloudRemoveSvg {...props} />;
});
