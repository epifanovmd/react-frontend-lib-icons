import React, { FC, memo } from 'react';
import AlphaFCircleSvg from '../svg/alpha-f-circle.svg';

export interface IAlphaFCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaFCircleIcon: FC<IAlphaFCircleIconProps> = memo(props => {
  return <AlphaFCircleSvg {...props} />;
});
