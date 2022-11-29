import React, { FC, memo } from 'react';
import CloudArrowDownOutlineSvg from '../svg/cloud-arrow-down-outline.svg';

export interface ICloudArrowDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudArrowDownOutlineIcon: FC<ICloudArrowDownOutlineIconProps> = memo(props => {
  return <CloudArrowDownOutlineSvg {...props} />;
});
