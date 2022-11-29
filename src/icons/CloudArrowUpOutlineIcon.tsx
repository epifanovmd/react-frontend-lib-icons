import React, { FC, memo } from 'react';
import CloudArrowUpOutlineSvg from '../svg/cloud-arrow-up-outline.svg';

export interface ICloudArrowUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudArrowUpOutlineIcon: FC<ICloudArrowUpOutlineIconProps> = memo(props => {
  return <CloudArrowUpOutlineSvg {...props} />;
});
