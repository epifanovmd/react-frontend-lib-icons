import React, { FC, memo } from 'react';
import ContrastCircleSvg from '../svg/contrast-circle.svg';

export interface IContrastCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContrastCircleIcon: FC<IContrastCircleIconProps> = memo(props => {
  return <ContrastCircleSvg {...props} />;
});
