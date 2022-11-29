import React, { FC, memo } from 'react';
import AlphaVCircleSvg from '../svg/alpha-v-circle.svg';

export interface IAlphaVCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaVCircleIcon: FC<IAlphaVCircleIconProps> = memo(props => {
  return <AlphaVCircleSvg {...props} />;
});
