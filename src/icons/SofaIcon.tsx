import React, { FC, memo } from 'react';
import SofaSvg from '../svg/sofa.svg';

export interface ISofaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SofaIcon: FC<ISofaIconProps> = memo(props => {
  return <SofaSvg {...props} />;
});
