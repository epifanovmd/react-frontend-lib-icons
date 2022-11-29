import React, { FC, memo } from 'react';
import KnifeSvg from '../svg/knife.svg';

export interface IKnifeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KnifeIcon: FC<IKnifeIconProps> = memo(props => {
  return <KnifeSvg {...props} />;
});
