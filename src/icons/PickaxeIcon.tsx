import React, { FC, memo } from 'react';
import PickaxeSvg from '../svg/pickaxe.svg';

export interface IPickaxeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PickaxeIcon: FC<IPickaxeIconProps> = memo(props => {
  return <PickaxeSvg {...props} />;
});
