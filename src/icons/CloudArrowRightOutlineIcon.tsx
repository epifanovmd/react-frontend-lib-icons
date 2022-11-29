import React, { FC, memo } from 'react';
import CloudArrowRightOutlineSvg from '../svg/cloud-arrow-right-outline.svg';

export interface ICloudArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudArrowRightOutlineIcon: FC<ICloudArrowRightOutlineIconProps> = memo(props => {
  return <CloudArrowRightOutlineSvg {...props} />;
});
