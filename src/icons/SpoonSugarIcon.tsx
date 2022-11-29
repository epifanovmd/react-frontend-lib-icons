import React, { FC, memo } from 'react';
import SpoonSugarSvg from '../svg/spoon-sugar.svg';

export interface ISpoonSugarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpoonSugarIcon: FC<ISpoonSugarIconProps> = memo(props => {
  return <SpoonSugarSvg {...props} />;
});
