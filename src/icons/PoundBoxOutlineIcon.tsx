import React, { FC, memo } from 'react';
import PoundBoxOutlineSvg from '../svg/pound-box-outline.svg';

export interface IPoundBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PoundBoxOutlineIcon: FC<IPoundBoxOutlineIconProps> = memo(props => {
  return <PoundBoxOutlineSvg {...props} />;
});
