import React, { FC, memo } from 'react';
import PencilRulerSvg from '../svg/pencil-ruler.svg';

export interface IPencilRulerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilRulerIcon: FC<IPencilRulerIconProps> = memo(props => {
  return <PencilRulerSvg {...props} />;
});
