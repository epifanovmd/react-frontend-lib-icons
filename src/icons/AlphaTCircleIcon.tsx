import React, { FC, memo } from 'react';
import AlphaTCircleSvg from '../svg/alpha-t-circle.svg';

export interface IAlphaTCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaTCircleIcon: FC<IAlphaTCircleIconProps> = memo(props => {
  return <AlphaTCircleSvg {...props} />;
});
