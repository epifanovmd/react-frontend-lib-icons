import React, { FC, memo } from 'react';
import PencilMinusOutlineSvg from '../svg/pencil-minus-outline.svg';

export interface IPencilMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilMinusOutlineIcon: FC<IPencilMinusOutlineIconProps> = memo(props => {
  return <PencilMinusOutlineSvg {...props} />;
});
