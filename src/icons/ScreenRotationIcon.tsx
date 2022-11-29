import React, { FC, memo } from 'react';
import ScreenRotationSvg from '../svg/screen-rotation.svg';

export interface IScreenRotationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScreenRotationIcon: FC<IScreenRotationIconProps> = memo(props => {
  return <ScreenRotationSvg {...props} />;
});
