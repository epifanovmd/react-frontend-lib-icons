import React, { FC, memo } from 'react';
import BreadSliceSvg from '../svg/bread-slice.svg';

export interface IBreadSliceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BreadSliceIcon: FC<IBreadSliceIconProps> = memo(props => {
  return <BreadSliceSvg {...props} />;
});
