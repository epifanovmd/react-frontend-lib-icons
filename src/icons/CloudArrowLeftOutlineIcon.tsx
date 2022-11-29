import React, { FC, memo } from 'react';
import CloudArrowLeftOutlineSvg from '../svg/cloud-arrow-left-outline.svg';

export interface ICloudArrowLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudArrowLeftOutlineIcon: FC<ICloudArrowLeftOutlineIconProps> = memo(props => {
  return <CloudArrowLeftOutlineSvg {...props} />;
});
