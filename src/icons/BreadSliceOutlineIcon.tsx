import React, { FC, memo } from 'react';
import BreadSliceOutlineSvg from '../svg/bread-slice-outline.svg';

export interface IBreadSliceOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BreadSliceOutlineIcon: FC<IBreadSliceOutlineIconProps> = memo(props => {
  return <BreadSliceOutlineSvg {...props} />;
});
