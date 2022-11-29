import React, { FC, memo } from 'react';
import ArtstationSvg from '../svg/artstation.svg';

export interface IArtstationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArtstationIcon: FC<IArtstationIconProps> = memo(props => {
  return <ArtstationSvg {...props} />;
});
