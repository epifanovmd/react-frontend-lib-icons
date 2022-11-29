import React, { FC, memo } from 'react';
import ChefHatSvg from '../svg/chef-hat.svg';

export interface IChefHatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChefHatIcon: FC<IChefHatIconProps> = memo(props => {
  return <ChefHatSvg {...props} />;
});
