import React, { FC, memo } from 'react';
import EraserSvg from '../svg/eraser.svg';

export interface IEraserIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EraserIcon: FC<IEraserIconProps> = memo(props => {
  return <EraserSvg {...props} />;
});
