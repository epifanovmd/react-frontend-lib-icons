import React, { FC, memo } from 'react';
import TreasureChestSvg from '../svg/treasure-chest.svg';

export interface ITreasureChestIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TreasureChestIcon: FC<ITreasureChestIconProps> = memo(props => {
  return <TreasureChestSvg {...props} />;
});
