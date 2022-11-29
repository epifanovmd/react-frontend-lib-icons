import React, { FC, memo } from 'react';
import KnifeMilitarySvg from '../svg/knife-military.svg';

export interface IKnifeMilitaryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KnifeMilitaryIcon: FC<IKnifeMilitaryIconProps> = memo(props => {
  return <KnifeMilitarySvg {...props} />;
});
