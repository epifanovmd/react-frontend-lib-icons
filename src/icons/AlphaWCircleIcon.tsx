import React, { FC, memo } from 'react';
import AlphaWCircleSvg from '../svg/alpha-w-circle.svg';

export interface IAlphaWCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaWCircleIcon: FC<IAlphaWCircleIconProps> = memo(props => {
  return <AlphaWCircleSvg {...props} />;
});
