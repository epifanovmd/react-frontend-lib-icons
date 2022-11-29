import React, { FC, memo } from 'react';
import BoxShadowSvg from '../svg/box-shadow.svg';

export interface IBoxShadowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoxShadowIcon: FC<IBoxShadowIconProps> = memo(props => {
  return <BoxShadowSvg {...props} />;
});
