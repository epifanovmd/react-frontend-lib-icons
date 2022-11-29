import React, { FC, memo } from 'react';
import AlphaNCircleSvg from '../svg/alpha-n-circle.svg';

export interface IAlphaNCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaNCircleIcon: FC<IAlphaNCircleIconProps> = memo(props => {
  return <AlphaNCircleSvg {...props} />;
});
