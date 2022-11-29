import React, { FC, memo } from 'react';
import ContrastBoxSvg from '../svg/contrast-box.svg';

export interface IContrastBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ContrastBoxIcon: FC<IContrastBoxIconProps> = memo(props => {
  return <ContrastBoxSvg {...props} />;
});
