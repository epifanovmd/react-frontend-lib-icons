import React, { FC, memo } from 'react';
import CrossSvg from '../svg/cross.svg';

export interface ICrossIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrossIcon: FC<ICrossIconProps> = memo(props => {
  return <CrossSvg {...props} />;
});
