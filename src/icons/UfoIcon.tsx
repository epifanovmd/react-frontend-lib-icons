import React, { FC, memo } from 'react';
import UfoSvg from '../svg/ufo.svg';

export interface IUfoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UfoIcon: FC<IUfoIconProps> = memo(props => {
  return <UfoSvg {...props} />;
});
