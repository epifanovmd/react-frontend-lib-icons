import React, { FC, memo } from 'react';
import PencilMinusSvg from '../svg/pencil-minus.svg';

export interface IPencilMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilMinusIcon: FC<IPencilMinusIconProps> = memo(props => {
  return <PencilMinusSvg {...props} />;
});
