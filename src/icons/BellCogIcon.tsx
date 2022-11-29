import React, { FC, memo } from 'react';
import BellCogSvg from '../svg/bell-cog.svg';

export interface IBellCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellCogIcon: FC<IBellCogIconProps> = memo(props => {
  return <BellCogSvg {...props} />;
});
