import React, { FC, memo } from 'react';
import AnvilSvg from '../svg/anvil.svg';

export interface IAnvilIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AnvilIcon: FC<IAnvilIconProps> = memo(props => {
  return <AnvilSvg {...props} />;
});
