import React, { FC, memo } from 'react';
import HandPeaceSvg from '../svg/hand-peace.svg';

export interface IHandPeaceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandPeaceIcon: FC<IHandPeaceIconProps> = memo(props => {
  return <HandPeaceSvg {...props} />;
});
