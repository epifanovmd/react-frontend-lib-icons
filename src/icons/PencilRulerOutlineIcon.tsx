import React, { FC, memo } from 'react';
import PencilRulerOutlineSvg from '../svg/pencil-ruler-outline.svg';

export interface IPencilRulerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilRulerOutlineIcon: FC<IPencilRulerOutlineIconProps> = memo(props => {
  return <PencilRulerOutlineSvg {...props} />;
});
