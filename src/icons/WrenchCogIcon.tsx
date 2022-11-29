import React, { FC, memo } from 'react';
import WrenchCogSvg from '../svg/wrench-cog.svg';

export interface IWrenchCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WrenchCogIcon: FC<IWrenchCogIconProps> = memo(props => {
  return <WrenchCogSvg {...props} />;
});
