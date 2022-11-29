import React, { FC, memo } from 'react';
import DrawSvg from '../svg/draw.svg';

export interface IDrawIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DrawIcon: FC<IDrawIconProps> = memo(props => {
  return <DrawSvg {...props} />;
});
