import React, { FC, memo } from 'react';
import HandHeartSvg from '../svg/hand-heart.svg';

export interface IHandHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandHeartIcon: FC<IHandHeartIconProps> = memo(props => {
  return <HandHeartSvg {...props} />;
});
