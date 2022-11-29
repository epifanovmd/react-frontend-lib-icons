import React, { FC, memo } from 'react';
import PencilOffOutlineSvg from '../svg/pencil-off-outline.svg';

export interface IPencilOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilOffOutlineIcon: FC<IPencilOffOutlineIconProps> = memo(props => {
  return <PencilOffOutlineSvg {...props} />;
});
