import React, { FC, memo } from 'react';
import ContrastSvg from '../svg/contrast.svg';

export interface IContrastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContrastIcon: FC<IContrastIconProps> = memo(props => {
  return <ContrastSvg {...props} />;
});
