import React, { FC, memo } from 'react';
import AlphaDCircleSvg from '../svg/alpha-d-circle.svg';

export interface IAlphaDCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaDCircleIcon: FC<IAlphaDCircleIconProps> = memo(props => {
  return <AlphaDCircleSvg {...props} />;
});
