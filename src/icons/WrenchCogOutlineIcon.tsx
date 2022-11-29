import React, { FC, memo } from 'react';
import WrenchCogOutlineSvg from '../svg/wrench-cog-outline.svg';

export interface IWrenchCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WrenchCogOutlineIcon: FC<IWrenchCogOutlineIconProps> = memo(props => {
  return <WrenchCogOutlineSvg {...props} />;
});
