import React, { FC, memo } from 'react';
import CloudMinusOutlineSvg from '../svg/cloud-minus-outline.svg';

export interface ICloudMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudMinusOutlineIcon: FC<ICloudMinusOutlineIconProps> = memo(props => {
  return <CloudMinusOutlineSvg {...props} />;
});
