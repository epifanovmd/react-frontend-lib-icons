import React, { FC, memo } from 'react';
import AxeBattleSvg from '../svg/axe-battle.svg';

export interface IAxeBattleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxeBattleIcon: FC<IAxeBattleIconProps> = memo(props => {
  return <AxeBattleSvg {...props} />;
});
