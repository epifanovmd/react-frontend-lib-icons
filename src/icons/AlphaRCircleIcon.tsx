import React, { FC, memo } from 'react';
import AlphaRCircleSvg from '../svg/alpha-r-circle.svg';

export interface IAlphaRCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaRCircleIcon: FC<IAlphaRCircleIconProps> = memo(props => {
  return <AlphaRCircleSvg {...props} />;
});
