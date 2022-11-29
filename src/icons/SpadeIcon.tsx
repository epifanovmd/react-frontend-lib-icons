import React, { FC, memo } from 'react';
import SpadeSvg from '../svg/spade.svg';

export interface ISpadeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpadeIcon: FC<ISpadeIconProps> = memo(props => {
  return <SpadeSvg {...props} />;
});
