import React, { FC, memo } from 'react';
import SwordSvg from '../svg/sword.svg';

export interface ISwordIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwordIcon: FC<ISwordIconProps> = memo(props => {
  return <SwordSvg {...props} />;
});
