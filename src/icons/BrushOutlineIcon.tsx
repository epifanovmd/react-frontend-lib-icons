import React, { FC, memo } from 'react';
import BrushOutlineSvg from '../svg/brush-outline.svg';

export interface IBrushOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BrushOutlineIcon: FC<IBrushOutlineIconProps> = memo(props => {
  return <BrushOutlineSvg {...props} />;
});
