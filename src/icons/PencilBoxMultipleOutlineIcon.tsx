import React, { FC, memo } from 'react';
import PencilBoxMultipleOutlineSvg from '../svg/pencil-box-multiple-outline.svg';

export interface IPencilBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilBoxMultipleOutlineIcon: FC<IPencilBoxMultipleOutlineIconProps> = memo(props => {
  return <PencilBoxMultipleOutlineSvg {...props} />;
});
