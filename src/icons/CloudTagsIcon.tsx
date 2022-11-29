import React, { FC, memo } from 'react';
import CloudTagsSvg from '../svg/cloud-tags.svg';

export interface ICloudTagsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudTagsIcon: FC<ICloudTagsIconProps> = memo(props => {
  return <CloudTagsSvg {...props} />;
});
