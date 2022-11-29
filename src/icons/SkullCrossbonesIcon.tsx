import React, { FC, memo } from 'react';
import SkullCrossbonesSvg from '../svg/skull-crossbones.svg';

export interface ISkullCrossbonesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkullCrossbonesIcon: FC<ISkullCrossbonesIconProps> = memo(props => {
  return <SkullCrossbonesSvg {...props} />;
});
