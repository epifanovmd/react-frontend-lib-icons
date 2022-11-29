import React, { FC, memo } from 'react';
import PencilBoxOutlineSvg from '../svg/pencil-box-outline.svg';

export interface IPencilBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilBoxOutlineIcon: FC<IPencilBoxOutlineIconProps> = memo(props => {
  return <PencilBoxOutlineSvg {...props} />;
});
