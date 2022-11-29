import React, { FC, memo } from 'react';
import BellCogOutlineSvg from '../svg/bell-cog-outline.svg';

export interface IBellCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellCogOutlineIcon: FC<IBellCogOutlineIconProps> = memo(props => {
  return <BellCogOutlineSvg {...props} />;
});
